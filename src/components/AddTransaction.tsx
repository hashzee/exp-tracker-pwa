import React, {useState, useContext} from 'react';
import {Typography, Box, TextField, Button} from '@material-ui/core';
import axios from 'axios';
import firebase from 'firebase';
import { askForPermissioToReceiveNotifications } from './../push-notification';
import { Tracker } from '../context/TrackerState';
import {ITrans} from './../types/Interface';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const [textError, setTextError] = useState(false);
    const [amtError, setAmtError] = useState(false);

    const {dispatch} = useContext(Tracker);

    function addTransaction(transaction:ITrans){
        dispatch({
            type:'ADD',
            payload:transaction
        });
    }

    function onSubmit(e:React.MouseEvent<HTMLButtonElement>) {

        e.preventDefault();
        
        if(text.length < 3 || text.length > 20){
            setTextError(true);
        }
        else{
            setTextError(false);
            if(amount > 0 && amount < 100000){
                setAmtError(false);
                const newTransaction = {
                    id: new Date().getTime(),
                    text,
                    amount: amount
                }
                setText('');
                setAmount(0);
                addTransaction(newTransaction);
            }
            else
            {
                setAmtError(true);
            }
        }
    }

    const NotificationButton = () => (
        <Button className="pnButton" onClick={askForPermissioToReceiveNotifications} >
          Allow Notificaitons ?
        </Button>
    );

    const onExpSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(text.length < 3 || text.length > 20){
            setTextError(true);
        }
        else
        {
            setTextError(false);
            if(amount > 0 && amount < 100000){
                setAmtError(false);
                const newTransaction = {
                    id: new Date().getTime(),
                    text,
                    amount: -amount
                }
                setText('');
                setAmount(0);
                addTransaction(newTransaction);

                // Messaging 
                setTimeout(sendNotification, 5000);    
            }
            else{
                setAmtError(true);
            }
        }
    }
    

    async function sendNotification(){
        const messaging = firebase.messaging();
        const token = await messaging.getToken();
        console.log('TOKEN in Component: ',token);
        const response = await axios.post(
            'https://fcm.googleapis.com/fcm/send',
            { notification: {
                title: "Expense Tracker by Zeeshan",
                body: "Save some money, you have low balance.",
                click_action: "",
                icon:'https://zh-exp-tracker.netlify.app/images/icons/icon-192x192.png',
            },
            "to": token },
            { headers: { 'Content-Type': 'application/json','Authorization': 'key=AAAAatDjAFI:APA91bHtPg63Cjow-epJylmEDat4coQLbY_p0luqVRjYT4Rlfy0eFH2CMP386gpKyUT4KF_oQlVgrPht9PQVnJ1WIVzc5KHo_MWzja-tRkC1QsMnqHso6tc4bBuHU8brfcXbrbpcvuTV' } }
          );
          console.log('Response: ',response);
    }
    //const error = (parseFloat(amount) < 1);

    return (
        <>
            <form>
                <Box m={2} mt={2}>
                <Typography variant='h6'>
                    Add New Transation
                </Typography>
                {/* <hr className='mainHr'/> */}
                <TextField
                    required={true}
                    id="descr"
                    label="Description"
                    variant="filled"
                    className="inputField"
                    size="small"
                    value={text}
                    error={textError}
                    helperText={textError===true ? '3 - 20 letters required':''}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                />
                <hr className='mainHr'/>
                <TextField
                    required
                    id="amt"
                    label="Amount"
                    variant="filled"
                    className="inputField"
                    size="small"
                    type="number"                                   
                    value={amount}
                    error={amtError}
                    helperText={amtError===true ? 'value from $1 to $100,000 required':''}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))}
                    />         
                </Box>

                <Box m={0} mt={2} textAlign="center">
                    <Button className="incomeButton" onClick={onSubmit}>Add Income</Button>
                    <Button className="expenseButton" onClick={onExpSubmit}>Add Expense</Button>
                </Box>
                <Box m={0} mb={2} textAlign="center">
                    <NotificationButton/>
                </Box>
                
            </form>
        </>
    )
}

export default AddTransaction;