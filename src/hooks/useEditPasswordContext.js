import { useContext } from "react";
import { EditPasswordContext } from "../context/EditPasswordContext";

export const useEditPasswordContext = () => {

    const context = useContext(EditPasswordContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}