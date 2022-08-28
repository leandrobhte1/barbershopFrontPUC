import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import CarrouselServicos from './CarrouselServicos';
import CarrouselProfissionais from './CarrouselProfissionais';
import AvaliacoesHome from './AvaliacoesHome';
import { useEffect } from 'react'

import { useAgendamentoContext } from '../hooks/useAgendamentoContext'

const BarberHome = () => {

    const { barberHome, dispatchBarberHome } = useBarberHomeContext();
    const { agendamentoDetails, dispatchAgendamento } = useAgendamentoContext();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="barberHome">
            <div className="voltar">
                <Link to={'/'}>
                    <img className='voltarPage' src={SetaEsquerda} alt="Voltar" />
                    <span className="voltar poppins">Voltar</span>
                </Link>
            </div>
            <div className="infoBarber">
                <div className="imgBarber">
                    <img src={barberHome.urlImagem} alt="Barbershop" />
                </div>
                <div className="text">
                    <h2 className="nameBarber poppins">{barberHome.name}</h2>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        isHalf= {true}
                        value={4.2}
                        classNames="react-stars-search"
                        edit={false}
                    />
                    <p className="descriptionBarber poppins">{barberHome.descricao}</p>
                </div>
            </div>
            <div className="servicos">
                <h2 className="poppins tittleCenter">Confira nossos serviços</h2>
                <CarrouselServicos servicos={barberHome.servicos}></CarrouselServicos>
            </div>
            <div className="profissionais">
                <h2 className="poppins tittleCenter">Confira nossos profissionais</h2>
                <CarrouselProfissionais showAgendar={false} funcionarios={barberHome.funcionarios}></CarrouselProfissionais>
            </div>
            <AvaliacoesHome></AvaliacoesHome>
        </div>
    )
}

export default BarberHome