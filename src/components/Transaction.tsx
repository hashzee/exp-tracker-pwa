import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TransactionsList.module.css';
import { Tracker } from '../context/TrackerState';
import {ITrans} from './../types/Interface';


const Transaction: React.FC<ITrans> = (transaction) => {

    const {dispatch} = useContext(Tracker);

    function delTransaction(transaction:ITrans){
        dispatch({
            type:'DEL',
            payload:transaction
        });
    }
     

    const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <>
            <ListItem key={transaction.id} className={(transaction.amount < 0 ? styles.expense:styles.income)}>
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => delTransaction(transaction)}/>
                </IconButton>
                </ListItemSecondaryAction>
                <ListItemText primary={sign+'$'+Math.abs(transaction.amount)} secondary={transaction.text}/>
            </ListItem>
        </>
    )
}

export default Transaction;
