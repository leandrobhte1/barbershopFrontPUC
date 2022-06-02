import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Tesoura from '../images/tesoura1.png'
import HairMachine from '../images/hairMachine.png'
import TesouraAndBeer from '../images/tesouraAndBeer.png'

const CarrouselProfissionais = (props) => {
    console.log("props.: ", props);
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
                                    <button className="btnCinzaPadrao poppins">Agendar</button>
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