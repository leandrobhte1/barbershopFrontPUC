import { useContext } from "react";
import { FreeDaysContext } from "../context/FreeDaysContext";

export const useFreeDaysContext = () => {

    const context = useContext(FreeDaysContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}