import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Tesoura from '../images/tesoura1.png'
import HairMachine from '../images/hairMachine.png'
import TesouraAndBeer from '../images/tesouraAndBeer.png'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAgendamentoContext } from '../hooks/useAgendamentoContext'

const CarrouselServicos = (props) => {

    const { barberHome, dispatchBarberHome } = useBarberHomeContext();
    const { agendamentoDetails, dispatchAgendamento } = useAgendamentoContext();
    const { user, dispatch } = useUserContext();

    const navigate = useNavigate()

    const handleAgendar = (e) => {
        console.log("e.: ", e);
        console.log("e.target.classList[1].: ", e.target.classList[1]);
        if(user.username == ""){
              toast.error('Você precisa estar logado para fazer um agendamento!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            let agend = [{ idEmpresa: barberHome.id, idCliente:user.id, idFuncionario:"",idServico:e.target.classList[1], date:"", horario: "", status:"", nota:"",anotacao:""}];
            dispatchAgendamento({type: "AGENDAMENTO_CHANGED", payload: agend})
            navigate(`/agendamento/profissional`);
        }
        
    }

    console.log("props.servicos.:", props.servicos);

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="ServicosSwiper">
                {props.servicos && props.servicos.map(s => (
                    <SwiperSlide key={s.id}>
                        <div className="cardServicos">
                            <div className="headerCardServicos">
                                <span className="poppins">{s.nome}</span>
                            </div>
                            <div className="bodyCardServicos">
                                <img src={Tesoura} alt="Corte + Barba" />
                                <div className="priceDiv">
                                    <span className="price poppins"> R$ </span>
                                    <span className="price2">{s.valor}</span>
                                </div>
                                <span className="descServico">{s.descricao}</span>
                                <div className="btAgendar">
                                    <button className={`btnCinzaPadrao ${s.id}`} onClick={(e) => handleAgendar(e)}>Agendar</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarrouselServicos