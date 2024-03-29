import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AvaliacoesHome from './AvaliacoesHome';
import { useUserContext } from '../hooks/useUserContext'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useAgendamentoContext } from '../hooks/useAgendamentoContext'
import { useFreeDaysContext } from '../hooks/useFreeDaysContext';
const BASE_URL = 'https://barbershoppuc-backend.herokuapp.com/api'

const Agendamento = () => {

    const [value, onChange] = useState(new Date());
    const [availableDaysList, setAvailableDaysList] = useState([]);
    const { freeDays, dispatchFreeDays } = useFreeDaysContext([]);
    const [horariosLivres, setHorariosLivres] = useState([]);
    const [ind, setInd] = useState(0);

    const { agendamentoDetails, dispatchAgendamento } = useAgendamentoContext();

    const [loading, setLoading] = useState(false);

    const [dateClicked, setDateClicked] = useState("");
    const navigate = useNavigate()

    const { user, dispatch } = useUserContext();

    const handleAgendamento = (e) => {

      let agend = [{ idEmpresa: agendamentoDetails[0].idEmpresa, idCliente:agendamentoDetails[0].idCliente, idFuncionario:agendamentoDetails[0].idFuncionario, idServico:agendamentoDetails[0].idServico, date:agendamentoDetails[0].date, horario: e.target.textContent, status:"agendado", nota:"0",anotacao:""}];
      dispatchAgendamento({type: "AGENDAMENTO_CHANGED", payload: agend})

      let dadosAgendamento = {
        "idEmpresa": agendamentoDetails[0].idEmpresa,
        "idCliente": agendamentoDetails[0].idCliente,
        "idFuncionario": agendamentoDetails[0].idFuncionario,
        "idServico": agendamentoDetails[0].idServico,
        "date": agendamentoDetails[0].date,
        "horario":e.target.textContent,
        "status": "agendado",
        "nota": "0",
        "anotacao": ""
      }
      let token = 'Bearer ' + user.access_token;
      axios.post(`${BASE_URL}/agenda/save`, dadosAgendamento, {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': token,
              
          }
      }).then(resposta => {


        toast.success('Seu agendamento foi realizado com sucesso!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate(`/`);
      }).catch(e=> {
        setLoading(false);
        toast.error('Erro inesperado!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        })
      
    }

    function tileClassName({ date }) {
      
      let newDate = date.toISOString().substring(0, 10);
      let split = newDate.toString().split("-");
      let day = split[2];
      let month = split[1];
      let year = split[0];
      let fullDate = year+"-"+month+"-"+day;

      // for(let i = 0; i < busyDaysList.length; i++){
      //   if(fullDate == busyDaysList[i]){
      //     return fullDate+" busyDay";
      //   }
      // }

      for(let i = 0; i < freeDays.length; i++){
        if(fullDate == freeDays[i]){
          return fullDate+" availableDay";
        }
      }
      
      return fullDate;
    }

    const callDay = (clikedDay) => {
      let dateFormatted = formatDate(clikedDay);
      setDateClicked(dateFormatted);
      let token = 'Bearer ' + user.access_token;
      let agend = [{ idEmpresa: agendamentoDetails[0].idEmpresa, idCliente:agendamentoDetails[0].idCliente, idFuncionario:agendamentoDetails[0].idFuncionario, idServico:agendamentoDetails[0].idServico, date:dateFormatted, horario: "", status:"", nota:"",anotacao:""}];
      dispatchAgendamento({type: "AGENDAMENTO_CHANGED", payload: agend})
      axios.get(`${BASE_URL}/agenda/disponivel?date=${dateFormatted}`, {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': token,
              
          }
      }).then(resposta => {
          let hlivres = resposta.data;
          setHorariosLivres(hlivres);
          
      }).catch(e=> {
          setLoading(false);
          toast.error('Erro inesperado!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
      })
  };

  function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
  }
    
  function formatDate(date) {
      return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
      ].join('-');
  }

    return (
      <div className="agendaCalendar">
        <div className="header">
          <h2 className="poppins">Escolha o horário de atendimento:</h2>
          {/* <div className="infoService">
            <h5 className="poppins">Empresa: Barbearia Silva</h5>
            <h5 className="poppins">Serviço: Corte de cabelo</h5>
            <h5 className="poppins">Profissional: Leandro</h5>
          </div> */}
        </div>
        <div className="agenda">
          <div className="leftSide">
            <Calendar onChange={onChange} value={value} className="agendaCalendar" tileClassName={tileClassName} onClickDay={callDay} />
            <div className="legends">
              <h5 className="poppins">Legenda:</h5>
              <div className="blue">
                <div className="blueColor"></div>
                <span className="poppins">Dia Selecionado</span>
              </div>
              <div className="green">
                <div className="greenColor"></div>
                <span className="poppins">Dia com horários disponíveis</span>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <h4>Horários disponíveis em {dateClicked}:</h4>
            <div className="horarios">
            {horariosLivres && horariosLivres.map(h => (
                  <div key={h.id} className="horario" onClick={ (e) => handleAgendamento(e)}>
                      <span className="time poppins">{h.horario}</span>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <AvaliacoesHome></AvaliacoesHome>
      </div>
    )
}

export default Agendamento