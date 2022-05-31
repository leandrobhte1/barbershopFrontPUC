import { useContext } from "react";
import { OptionsMenuEmpresaContext } from "../context/OptionsMenuEmpresaContext";

export const useOptionsMenuEmpresaContext = () => {

    const context = useContext(OptionsMenuEmpresaContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}