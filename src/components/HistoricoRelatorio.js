import LineHistorico from "./LineHistorico";
import { useState, useEffect } from "react";
import { useUserContext } from '../hooks/useUserContext';
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const HistoricoRelatorio = (props) => {

    console.log("props.: ", props);

    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        setHistorico(props);
    }, []);

    console.log("historico.: ", historico);

    return (
        <div className="historico">
            <h1 className="tittleHistorico poppins">Histórico de atendimentos:</h1>
            
            <div className="titleSectionHistorico">
                <h3 className="subtittle dateHour">Data e Hora</h3>
                <div className="lineBetween"></div>
                <h3 className="subtittle">Serviço</h3>
            </div>
            <div className="infoHistorico">
                { props.props && props.props.map( (history) => 
                    <div key={history[4]}>
                        <LineHistorico service={history[7]} nota={history[3]} date={history[5]} hour={history[6]} barberShop={history[0]}  professional={history[1] + " " + history[2]} status={"agendado"} ></LineHistorico>
                    </div>)
                }
            </div>
        </div>
    )
}

export default HistoricoRelatorio