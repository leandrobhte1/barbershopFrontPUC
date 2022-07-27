import { createContext, useReducer } from 'react';

export const BarberHomeContext = createContext();

export const barberHomeReducer = (state, action) => {
    
    switch(action.type) {
        case "BARBER_HOME_CHANGED":
            return { ...state, barberHome: action.payload};
        default:
            return state;
    }

};

export const BarberHomeContextProvider = ({children}) => {
    const [state, dispatchBarberHome] = useReducer(barberHomeReducer, { barberHome: { id: '', name: '', descricao: '', dono: '', urlImagem:'', bairro:'', cep: '', rua: '', status: false, cidade: '', cnpj: '', email: '', funcionarios: [], servicos: [], numero: '', telefone: ''}})

    return (
        <BarberHomeContext.Provider value={{ ...state, dispatchBarberHome }}>
            {children}
        </BarberHomeContext.Provider>
    );
};