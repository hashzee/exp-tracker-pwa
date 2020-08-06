import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TransactionsList from './TransactionsList';
import DoughnutChart from './DoughnutChart';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#FFFFFF',
  },
  headingBG:{
    backgroundColor: '#08284d',
  },
  white:{
    color: '#FFFFFF',
  },  
}));

const ExpandPanel = () => {
  const classes = useStyles();

  return (
    <>
    <Box m={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.white} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingBG}
        >
          <Typography className={(classes.heading)}>Transacitons History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TransactionsList />
        </AccordionDetails>
      </Accordion>
    </Box>
    <Box m={2}>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.white} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingBG}
        >
          <Typography className={(classes.heading)}>Graph</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DoughnutChart />
        </AccordionDetails>
      </Accordion>
    </Box>    
    </>
  );
}

export default ExpandPanel;