import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const useSearchContext = () => {

    const context = useContext(SearchContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}