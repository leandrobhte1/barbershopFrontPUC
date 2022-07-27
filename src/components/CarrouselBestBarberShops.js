import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import BarbeariaRibeiro from '../images/barbeariaRibeiro.png'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import { useNavigate } from "react-router-dom";

const CarrouselBestBarberShops = () => {

    const { result, dispatchResult } = useResultSearchContext();
    const { barberHome, dispatchBarberHome } = useBarberHomeContext();
    const navigate = useNavigate();

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

      useEffect(() => {
        axios.get(`http://localhost:8080/api/empresas/search?searchTerm=`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(resp => {
                let dados = resp.data;
                dispatchResult({type: "SEARCH_RESULT", payload: dados})
            });
      }, []);

    const handleBarberHome = (r) => {
        dispatchBarberHome({type: "BARBER_HOME_CHANGED", payload: r});
        navigate(`/barberHome/${r.id}`);
    }

    return (
        <div className="carrouselBestBarbersShops">
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="MySwiper">
                {result.content && result.content.map(r => (
                <SwiperSlide  key={r.id}>
                    <div className="cardBestBarbers">
                        <img className="imgCard barberImgSlide" src={r.urlImagem} alt="Barber" />
                        <div className="textCard">
                            <span className="barberName poppins">{r.name}</span>
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
                            <span className="barberDescription poppins">{r.descricao}</span>
                            <div className="bt">
                                <input className='btnAgendar' type="button" value="AGENDAR" onClick={ () => handleBarberHome(r)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarrouselBestBarberShops