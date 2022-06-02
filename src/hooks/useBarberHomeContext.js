import { useContext } from "react";
import { BarberHomeContext } from "../context/BarberHomeContext";

export const useBarberHomeContext = () => {

    const context = useContext(BarberHomeContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;

}