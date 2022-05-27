import AgendaIcon from '../images/agenda.png'
import HistoricoIcon from '../images/historico.png'
import AvaliacoesIcon from '../images/avaliacoes.png'
import RelatoriosIcon from '../images/relatorios.png'
import UsuariosIcon from '../images/userimage.png'
import { useUserContext } from '../hooks/useUserContext'

const OptionsMenuUser = () => {
    const { user, dispatch } = useUserContext();

    let isAdmin = false;

    console.log("user.: ", user);

    if(user.roles == "SUPER ADMIN" || user.roles == "ADMIN" || user.roles == "MANAGER"){
        isAdmin = true;
    }

    return (
        <div className="menuUserOpen">
            <ul className="userLogadoOpen">
                <li>
                    <a href='#agenda'>
                        <span>Agenda</span>
                        <img className="iconMenuUserOpen agendaIcon" src={AgendaIcon} alt="Agenda" />
                    </a>
                </li>
                <li>
                    <a href='#historico'>
                        <span>Histórico</span>
                        <img className="iconMenuUserOpen historicoIcon" src={HistoricoIcon} alt="Histórico" />
                    </a>
                </li>
                <li>
                    <a href='#avaliacao'>
                        <span>Avaliações</span>
                        <img className="iconMenuUserOpen avaliacoesIcon" src={AvaliacoesIcon} alt="Avaliações" />
                    </a>
                </li>
                {isAdmin == true &&
                    <div className="menusAdmin">
                        <li>
                            <a href='#reports'>
                                <span>Relatórios</span>
                                <img className="iconMenuUserOpen relatoriosIcon" src={RelatoriosIcon} alt="Relatórios" />
                            </a>
                        </li>
                        <li>
                            <a href='#cadUsuarios'>
                                <span>Gerenciamento de usuários</span>
                                <img className="iconMenuUserOpen relatoriosIcon" src={UsuariosIcon} alt="Relatórios" />
                            </a>
                        </li>
                    </div>
                }
            </ul>
        </div>
    )
}

export default OptionsMenuUser