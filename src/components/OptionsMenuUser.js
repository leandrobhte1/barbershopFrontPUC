import AgendaIcon from '../images/agenda.png'
import HistoricoIcon from '../images/historico.png'
import AvaliacoesIcon from '../images/avaliacoes.png'
import RelatoriosIcon from '../images/relatorios.png'
import UsuariosIcon from '../images/userimage.png'
import EmpresaIcon from '../images/building.png'
import { useUserContext } from '../hooks/useUserContext'
import { useMenuUserContext } from '../hooks/useMenuUserContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const OptionsMenuUser = () => {
    const { user, dispatch } = useUserContext();
    const { menuUserOpen, dispatchMenuUser } = useMenuUserContext();

    let isAdmin = false;
    let isManager = false;

    if(user.roles == "SUPER ADMIN" || user.roles == "ADMIN" || user.roles == "MANAGER"){
        isManager = true;
        isAdmin = false;
        if(user.roles == "SUPER ADMIN" || user.roles == "ADMIN"){
            isAdmin = true;
            isManager = true;
        }
    }

    const logoff = () => {
        toast.success('Logoff realizado com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        let noUser = { id: '', username: '', firstname: '', lastname: '',cpf:'', roles:'', urlImagemPerfil: '', empresas: [], logado: false, access_token: '', refresh_token: ''};
        dispatch({type: "LOGIN", payload: noUser});
    }

    return (
        <div className="menuUserOpen">
            <ul className="userLogadoOpen" onClick={ () => dispatchMenuUser({type: "MENU_USER_CLICKED", payload: !menuUserOpen}) }>
                <li>
                    <Link to="account">
                        <span>Minha conta</span>
                        <img className="iconMenuUserOpen relatoriosIcon" src={UsuariosIcon} alt="Relatórios" />
                    </Link>
                </li>
                <li>
                    <Link to="agenda">
                        <span>Agenda</span>
                        <img className="iconMenuUserOpen agendaIcon" src={AgendaIcon} alt="Agenda" />
                    </Link>
                </li>
                {isManager == false &&
                <li>
                    <Link to="historico">
                        <span>Histórico</span>
                        <img className="iconMenuUserOpen historicoIcon" src={HistoricoIcon} alt="Histórico" />
                    </Link>
                </li>
                }
                {/* {isAdmin == true &&
                    <div className="menusAdmin">
                        <li>
                            <Link to="reports">
                                <span>Relatórios</span>
                                <img className="iconMenuUserOpen relatoriosIcon" src={RelatoriosIcon} alt="Relatórios" />
                            </Link>
                        </li>
                    </div>
                } */}
                {isManager == true &&
                    <div className="menusAdmin">
                        <li>
                            <Link to="empresa">
                                <span>Gerenciamento de empresa</span>
                                <img className="iconMenuUserOpen relatoriosIcon" src={EmpresaIcon} alt="Relatórios" />
                            </Link>
                        </li>
                    </div>
                }
                <li className='menuSair' onClick={() => logoff()}>
                    <span>Sair</span>
                </li>
            </ul>
        </div>
    )
}

export default OptionsMenuUser