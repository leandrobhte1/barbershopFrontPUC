import { createContext, useReducer } from 'react';

export const TabHomeSelectedContext = createContext();

export const tabReducer = (state, action) => {
    switch(action.type) {
        case "TAB_CHANGED":
            return { ...state, tab: action.payload};
        default:
            return state;
    }
};

export const TabHomeSelectedContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tabReducer, { tab: "1"})

    return (
        <TabHomeSelectedContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TabHomeSelectedContext.Provider>
    );
};