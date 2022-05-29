import { useUserContext } from '../hooks/useUserContext'
import UsuarioInfo from './UsuarioInfo';
import { Link } from 'react-router-dom'

const MenuUser = () => {

    const { user, dispatch } = useUserContext();

    return (
        <div className="menus col-md-4">
            <div className="naoLogado">
                <ul className="top-menu top-menu-user">
                    <li className={`${user.firstname ? 'd-flex' : 'd-none'}`}>
                        <UsuarioInfo />
                    </li>
                    <li className={`${user.firstname ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Login</Link>
                    </li>
                    <li className={`${user.firstname ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuUser