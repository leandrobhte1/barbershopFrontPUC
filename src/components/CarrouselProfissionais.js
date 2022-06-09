import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Tesoura from '../images/tesoura1.png'
import HairMachine from '../images/hairMachine.png'
import TesouraAndBeer from '../images/tesouraAndBeer.png'
import { ToastContainer, toast } from 'react-toastify';

const CarrouselProfissionais = (props) => {
    
    const handleAgendar = (e) => {
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                                    <button className="btnCinzaPadrao poppins" onClick={handleAgendar}>Agendar</button>
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