import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { TransactionType, GlobalProviderProps, initialStateType } from './../types/Types';

//Initial State
const initialState = {transactions: []}
export const GlobalContext = createContext<{ state: initialStateType;dispatch: React.Dispatch<any>; }>({ state: initialState, dispatch: () => null  });
export const GlobalProvider = ({ children }: GlobalProviderProps) => {

const mainReducer = ({ transactions }: any, action: any) => ({
    transactions: AppReducer(transactions, action),
});

const [state, dispatch] = useReducer(mainReducer, initialState);

    function delTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction: TransactionType) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,delTransaction,addTransaction}}>
        <GlobalContext.Provider value={{state, delTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

