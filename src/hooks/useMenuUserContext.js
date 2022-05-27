import { useContext } from "react";
import { MenuUserContext } from "../context/MenuUserContext";

export const useMenuUserContext = () => {

    const context = useContext(MenuUserContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}