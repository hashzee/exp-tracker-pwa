import {TransactionType} from './../types/Types';

export default (state:TransactionType[], actions:any) => {
    switch(actions.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.filter(transaction => transaction.id !== actions.payload)
            }
        // case 'ADD_TRANSACTION':
        //     return {
        //         ...state,
        //         transactions:[actions.payload, ...state.transactions]
        //     }
        default:
            return state;
    }
}