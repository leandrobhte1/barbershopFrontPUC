import { createContext, useReducer } from 'react';

export const MenuUserContext = createContext();

export const menuUserReducer = (state, action) => {
    switch(action.type) {
        case "MENU_USER_CLICKED":
            return { ...state, menuUserOpen: action.payload};
        default:
            return state;
    }
};

export const MenuUserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(menuUserReducer, { menuUserOpen: false})

    console.log("MenuUserContext: ", state);

    return (
        <MenuUserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MenuUserContext.Provider>
    );
};