import { useContext } from "react";
import { AgendamentoContext } from "../context/AgendamentoContext";

export const useAgendamentoContext = () => {

    const context = useContext(AgendamentoContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}