export interface IState    {transactions: Array<ITrans>}
export interface ITrans    {id: number,text: string, amount: number}
export interface IAction   {type: string,payload: any}
export interface IAmts     {amount: Array<number>}
