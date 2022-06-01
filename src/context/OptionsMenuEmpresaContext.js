import { createContext, useReducer } from 'react';

export const OptionsMenuEmpresaContext = createContext();

export const optionsMenuEmpresaReducer = (state, action) => {
    
    switch(action.type) {
        case "OPTIONS_MENU_EMPRESA_CHANGED":
            console.log("payload.: ", action.payload)
            return { ...state, options: action.payload};
        default:
            return state;
    }

};

export const OptionsMenuEmpresaContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(optionsMenuEmpresaReducer, { options: { agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false}})

    return (
        <OptionsMenuEmpresaContext.Provider value={{ ...state, dispatch }}>
            {children}
        </OptionsMenuEmpresaContext.Provider>
    );
};