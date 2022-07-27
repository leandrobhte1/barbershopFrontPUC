import { createContext, useReducer } from 'react';

export const AgendamentoContext = createContext();

export const agendamentoReducer = (state, action) => {

    switch(action.type) {
        case "AGENDAMENTO_CHANGED":
            console.log("payload.: ", action.payload);
            return { ...state, agendamentoDetails: action.payload};
        default:
            return state;
    }

}
export const AgendamentoContextProvider = ({children}) => {
    const [state, dispatchAgendamento] = useReducer(agendamentoReducer, { agendamentoDetails: [{ idEmpresa: "", idCliente:"", idFuncionario:"",idServico:"", date:"", horario: "", status:"", nota:"0",anotacao:""}]})

    return (
        <AgendamentoContext.Provider value={{...state, dispatchAgendamento}} >
            {children}
        </AgendamentoContext.Provider>
    );
};
