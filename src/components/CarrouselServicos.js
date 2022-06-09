import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Tesoura from '../images/tesoura1.png'
import HairMachine from '../images/hairMachine.png'
import TesouraAndBeer from '../images/tesouraAndBeer.png'
import { ToastContainer, toast } from 'react-toastify';

const CarrouselServicos = () => {

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
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte de cabelo</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={HairMachine} alt="Corte de cabelo" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta por um preço especial cortes exclusivos para ficar estiloso</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba + 1  Long Neck</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={TesouraAndBeer} alt="Corte + Barba + 1 Long Neck" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">45,90</span>
                            </div>
                            <span className="descServico">Tenha seu corte e barba e ainda aproveite uma long neck para relaxar</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Relaxamento</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={TesouraAndBeer} alt="Corte + Relaxamento" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">55,90</span>
                            </div>
                            <span className="descServico">Tenha seu corte e aproveite uma massagem para relaxar</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardServicos">
                        <div className="headerCardServicos">
                            <span className="poppins">Corte + Barba</span>
                        </div>
                        <div className="bodyCardServicos">
                            <img src={Tesoura} alt="Corte + Barba" />
                            <div className="priceDiv">
                                <span className="price poppins"> R$ </span>
                                <span className="price2">29,90</span>
                            </div>
                            <span className="descServico">Garanta o seu corte de cabelo e faça a sua barba por um preço promocional</span>
                            <div className="btAgendar">
                                <button className="btnCinzaPadrao"  onClick={handleAgendar}>Agendar</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarrouselServicos