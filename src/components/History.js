import LineHistorico from "./LineHistorico";
import { useState, useEffect } from "react";
import { useUserContext } from '../hooks/useUserContext';
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const History = () => {
    const { user, dispatch } = useUserContext();

    const [historico, setHistorico] = useState("");

    useEffect(() => {
        let token = 'Bearer ' + user.access_token;
        axios.get(`http://localhost:8080/api/agenda/history?idCliente=${user.id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        }).then(resposta => {
            setHistorico(resposta.data);
        })
    }, []);

    return (
        <div className="historico">
            <h1 className="tittleHistorico poppins">Histórico de atendimentos:</h1>
            
            <div className="titleSectionHistorico">
                <h3 className="subtittle dateHour">Data e Hora</h3>
                <div className="lineBetween"></div>
                <h3 className="subtittle">Serviço</h3>
            </div>
            <div className="infoHistorico">
                { historico && historico.map( (history) => 
                    <div key={history[5]}>
                        <LineHistorico service={history[7]} nota={history[3]} date={history[4]} hour={history[6]} barberShop={history[0]}  professional={history[1] + " " + history[2]} status={"agendado"} ></LineHistorico>
                    </div>)
                }
            </div>
        </div>
    )
}

export default History