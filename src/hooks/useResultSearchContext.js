import { useContext } from "react";
import { ResultSearchContext } from "../context/ResultSearchContext";

export const useResultSearchContext = () => {

    const context = useContext(ResultSearchContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}