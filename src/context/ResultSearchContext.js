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
    const [state, dispatch] = useReducer(resultReducer, { result: []})

    return (
        <ResultSearchContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ResultSearchContext.Provider>
    );
};