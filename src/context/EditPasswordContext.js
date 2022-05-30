import { createContext, useReducer } from 'react';

export const EditPasswordContext = createContext();

export const editPasswordReducer = (state, action) => {
    switch(action.type) {
        case "EDIT_PASSWORD":
            return { ...state, editPassword: action.payload};
        default:
            return state;
    }
};

export const EditPasswordContextProvider = ({children}) => {
    const [state, dispatchEdit] = useReducer(editPasswordReducer, { editPassword: false})

    return (
        <EditPasswordContext.Provider value={{ ...state, dispatchEdit }}>
            {children}
        </EditPasswordContext.Provider>
    );
};