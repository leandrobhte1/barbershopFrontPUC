import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";

const CarrouselBestBarberShops = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="MySwiper">
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        {/* <img className="imgCard" src={Avaliacao1} alt="Barber" /> */}
                        <div className="textCard">
                            {/* <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div> */}
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarrouselBestBarberShops