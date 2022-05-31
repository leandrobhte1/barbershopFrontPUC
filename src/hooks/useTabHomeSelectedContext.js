import { useContext } from "react";
import { TabHomeSelectedContext } from "../context/tabHomeSelectedContext";

export const useTabHomeSelectedContext = () => {

    const context = useContext(TabHomeSelectedContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}