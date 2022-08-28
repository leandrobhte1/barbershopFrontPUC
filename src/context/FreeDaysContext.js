import { createContext, useReducer } from 'react';

export const FreeDaysContext = createContext();

export const freeDaysReducer = (state, action) => {
    
    switch(action.type) {
        case "FREE_DAYS_CHANGED":
            console.log("action.payload.: ", action.payload);
            return { ...state, freeDays: action.payload};
        default:
            return state;
    }

};

export const FreeDaysContextProvider = ({children}) => {
    const [state, dispatchFreeDays] = useReducer(freeDaysReducer, { freeDays: []})

    return (
        <FreeDaysContext.Provider value={{ ...state, dispatchFreeDays }}>
            {children}
        </FreeDaysContext.Provider>
    );
};