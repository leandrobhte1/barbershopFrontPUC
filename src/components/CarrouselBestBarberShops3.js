import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import BarbeariaRibeiro from '../images/avaliacao2.png'

const CarrouselBestBarberShops3 = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="MySwiper">
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={4.5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={4}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={4}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={4}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={4}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={3.5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={3.5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={3.5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={BarbeariaRibeiro} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">Barbearia Gomes</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={3.5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                            <span className="barberDescription poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" />
                            </div>
                            
                        </div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarrouselBestBarberShops3