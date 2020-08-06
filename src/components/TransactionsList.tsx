import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import Transaction from './Transaction';
import { Tracker } from '../context/TrackerState';
import {ITrans} from './../types/Interface';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },

}));



export default function InteractiveList() {
  const classes = useStyles();
  const {state} = useContext(Tracker);


  return (
    <div className={classes.root}>
        <Grid item >
          <div className={classes.demo}>
            <List dense={true}>
              {state.transactions.map((transaction:ITrans) => (<Transaction id={transaction.id} text={transaction.text} amount={transaction.amount}/>))}                             
            </List>
          </div>
        </Grid>
 
    </div>
  );
}
