import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer.js';


const initialState={
    transactions:[]
}
export const GlobalContext=createContext(initialState); //creating a global State with the value of initial state


export const GlobalProvider =({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState/*Initial Object*/);
    
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}