import React, { createContext, useReducer } from 'react';
import {IAction, IState, ITrans} from './../types/Interface';

const initialState: IState = {
    transactions: [
    ]
};

export const Tracker = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'ADD':
            return { ...state, transactions: [action.payload, ...state.transactions] }

        case 'DEL':
            return { ...state, transactions: state.transactions.filter((transaction: ITrans) => transaction.id !== action.payload.id)}

        default:
            return state;
    }

}

export function TrackerProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Tracker.Provider value={{ state, dispatch }}>{props.children}</Tracker.Provider>
}