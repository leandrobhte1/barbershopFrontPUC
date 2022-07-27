import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Tesoura from '../images/tesoura1.png'
import HairMachine from '../images/hairMachine.png'
import TesouraAndBeer from '../images/tesouraAndBeer.png'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAgendamentoContext } from '../hooks/useAgendamentoContext'

const CarrouselProfissionais = (props) => {

    const { agendamentoDetails, dispatchAgendamento } = useAgendamentoContext();

    const navigate = useNavigate()
    
    const handleAgendar = (e) => {
        console.log("e.target.classList[2].: ", e.target.classList[2]);
        let agend = [{ idEmpresa: agendamentoDetails[0].idEmpresa, idCliente:agendamentoDetails[0].idCliente, idFuncionario:e.target.classList[2], idServico:agendamentoDetails[0].idServico, date:"", horario: "", status:"", nota:"",anotacao:""}];
        dispatchAgendamento({type: "AGENDAMENTO_CHANGED", payload: agend})
        navigate(`/agendamento`);
    }

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="ServicosSwiper">
                {props.funcionarios && props.funcionarios.map(f => (
                    <SwiperSlide key={f.id}>
                        <div className="cardServicos cardFuncionarios">
                            <div className="headerCardServicos">
                                <span className="poppins">{f.firstname} {f.lastname}</span>
                            </div>
                            <div className="bodyCardServicos">
                                <img className="imageProfissional" src={f.urlImagemPerfil} alt="Corte + Barba" />
                                <span className="poppins">{f.firstname} {f.lastname}</span>
                                <div className="btAgendar">
                                    {props.showAgendar == true &&
                                        <button className={`btnCinzaPadrao poppins ${f.id}`} onClick={(e) => handleAgendar(e)}>Agendar</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarrouselProfissionais