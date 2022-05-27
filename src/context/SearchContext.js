import { createContext, useReducer } from 'react';

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
    switch(action.type) {
        case "SEARCH_CHANGED":
            return { ...state, search: action.payload};
        default:
            return state;
    }
};

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, { search: ""})

    console.log("SearchContext: ", state);

    return (
        <SearchContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
};