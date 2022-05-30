import ProfessionalIMG from '../images/user.png'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const CardHistorico = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="cardHistorico">
            <div className={"leftBar " + (props.status === 'NOK' && 'red')}></div>
            <div className="estrelas">
            {(props.avaliado == true && props.status == 'OK') && <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={props.nota}
                    classNames="react-stars-cardHistorico"
                    edit={false}
                />}
            </div>
            <div className="optionsCard">
                <a href="#">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                </a>
            </div>
            <div className="info">
                <span className="service lato">{props.service}</span>
                <span className="barbershop lato">{props.barberShop}</span>
                <div className="lineBottom">
                    <div className="professional">
                        <img src={ProfessionalIMG} alt="Professional" />
                        <span className="nameProfessional">{props.professional}</span>
                    </div>
                    {props.status == 'NOK' &&
                        <span className="reason poppins">{props.reason}</span>
                    }
                    {(props.status == 'OK' && props.nota == 0) &&
                        <Link to="/avaliacao"><button className="avaliarServicoBT lato">Avaliar serviço</button></Link>
                    }
                    {(props.status == 'OK' && props.nota != 0) &&
                        <Link to="/avaliacao"><button className="avaliarServicoBT lato">Mudar avaliação</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardHistorico