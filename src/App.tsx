import React from 'react';
import Head from './components/Head';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import ExpandPanel from './components/ExpandPanel';
import AddTransaction from './components/AddTransaction';
import {TrackerProvider} from './context/TrackerState';

import './App.css';

function App(): JSX.Element {

  return (
    <TrackerProvider>
      <div className="Container">
            <Head/>
            <Balance />
            <IncomeExp />
            <ExpandPanel />
            <AddTransaction />
      </div> 
    </TrackerProvider>
  );
}

export default App;
