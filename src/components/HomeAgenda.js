import SetaDireita from '../images/setaDireita.png'
import HomeAgendaImg from '../images/homeAgenda.png'

const HomeAgenda = () => {
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
                    <a href="">
                        <span className='moreInfo poppins'>Mais info</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeAgenda