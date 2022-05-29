import { createContext, useReducer } from 'react';

export const ResultSearchContext = createContext();

export const resultReducer = (state, action) => {
    switch(action.type) {
        case "SEARCH_RESULT":
            return { ...state, result: action.payload};
        default:
            return state;
    }
};

export const ResultSearchContextProvider = ({children}) => {
    const [state, dispatchResult] = useReducer(resultReducer, { result: []})

    return (
        <ResultSearchContext.Provider value={{ ...state, dispatchResult }}>
            {children}
        </ResultSearchContext.Provider>
    );
};