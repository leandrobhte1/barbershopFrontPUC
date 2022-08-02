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
const BASE_URL = 'https://barbershop-backend-puc.herokuapp.com/api'

const Agendamento = () => {

    const [value, onChange] = useState(new Date());
    const [availableDaysList, setAvailableDaysList] = useState([]);
    const [horariosLivres, setHorariosLivres] = useState([]);

    const { agendamentoDetails, dispatchAgendamento } = useAgendamentoContext();

    const [loading, setLoading] = useState(false);

    const [dateClicked, setDateClicked] = useState("");
    const navigate = useNavigate()

    const { user, dispatch } = useUserContext();

    // let busyDaysList = ["13-Jul-2022","14-Jul-2022","18-Jul-2022","21-Jul-2022","23-Jul-2022","25-Jul-2022"];
    // let availableDaysList = ["12-Jul-2022","15-Jul-2022","16-Jul-2022","19-Jul-2022","20-Jul-2022","22-Jul-2022"];

    useEffect(() => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      let todayDate = dd + '-' + mm + '-' + yyyy;
      todayDate = "14-08-2022";
      let token = 'Bearer ' + user.access_token;
      axios.get(`https://barbershop-backend-puc.herokuapp.com/api/agenda/month?date=${todayDate}`, {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': token
          }
      }).then(resposta => {
          for(let i = 0; i < resposta.data.length; i++){
              let arrayy = availableDaysList;
              arrayy.indexOf(resposta.data[i].date) === -1 ? arrayy.push(resposta.data[i].date) : console.log();
              setAvailableDaysList(arrayy);
          }
      })

  }, [availableDaysList]);

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
      console.log("dadosAgendamento.: ", dadosAgendamento);
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

      for(let i = 0; i < availableDaysList.length; i++){
        if(fullDate == availableDaysList[i]){
          return fullDate+" availableDay";
        }
      }
      
      return fullDate;
    }

    const callDay = (clikedDay) => {
      let dateFormatted = formatDate(clikedDay);
      console.log("dateFormatted.: ", dateFormatted);
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
          console.log("resposta.: ", resposta);
          console.log("resposta.data .: ", resposta.data);
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

  console.log("agendamentoDetails.: ", agendamentoDetails);

    return (
      <div className="agendaCalendar">
        <div className="header">
          <h2 className="poppins">Escolha o horário de atendimento:</h2>
          <div className="infoService">
            <h5 className="poppins">Empresa: Barbearia Silva</h5>
            <h5 className="poppins">Serviço: Corte de cabelo</h5>
            <h5 className="poppins">Profissional: Leandro</h5>
          </div>
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