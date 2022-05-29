import { useUserContext } from '../hooks/useUserContext'
import { useMenuUserContext } from '../hooks/useMenuUserContext'
import If, { Else } from './common/If'
import OptionsMenuUser from './OptionsMenuUser'
import User from '../images/user1.png'

const UsuarioInfo = () => {

    const { user, dispatchUser } = useUserContext();
    const { menuUserOpen, dispatch } = useMenuUserContext();

    return (
        <div className='usuarioInfo'>
            <If test={user && user.firstname}>
                <div className="userContent" onClick={ () => dispatch({type: "MENU_USER_CLICKED", payload: !menuUserOpen}) }>
                    <div className="text">
                        <span>Olá, <strong>{user.firstname}</strong>!</span>    
                        {user && <span className="role">{user.roles}</span>}
                    </div>
                    <img className='imgUser' src={user.urlImagemPerfil} alt="imgUser" />
                </div>
                {menuUserOpen &&
                    <div className="optionsMenu">
                        <OptionsMenuUser></OptionsMenuUser>
                    </div>
                }
                {/* <Else>
                    <span>Seja bem-vindo!</span>    
                </Else> */}
            </If>
        </div>
    )
}

export default UsuarioInfo