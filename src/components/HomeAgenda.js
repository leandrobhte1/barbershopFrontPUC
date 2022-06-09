import SetaDireita from '../images/setaDireita.png'
import HomeAgendaImg from '../images/homeAgenda.png'
import { ToastContainer, toast } from 'react-toastify';

const HomeAgenda = () => {

    const handleMoreInfo = (e) => {
        toast.info('Tela não existe! Não era requisito ter todas as telas do sistema completo!', {
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
        <div className="agendaHome">
            <div className="imageAgenda">
                <img src={HomeAgendaImg} alt="Agenda" />
            </div>
            <div className="textAgenda">
                <h4 className="section_page poppins">AGENDA</h4>
                <h1 className="title_home poppins">Veja seus compromissos na agenda</h1>
                <span className='text_contentHome poppins'>Tenha acesso a uma agenda que mostra seus compromissos e não perca seu histórico de atendimentos!</span>
                <div className="moreInfoDiv">
                    <span className='moreInfo poppins' onClick={handleMoreInfo}>Mais info</span>
                    <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                </div>
            </div>
        </div>
    )
}

export default HomeAgenda