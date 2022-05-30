import { useUserContext } from '../hooks/useUserContext'
import { useEditPasswordContext } from '../hooks/useEditPasswordContext'
import { useState } from "react";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

const Account = () => {

    const { user, dispatchUser } = useUserContext();
    const { editPassword, dispatchEdit } = useEditPasswordContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAlterarSenha = (e) => {
        e.preventDefault();
        console.log("editPassword.: ", editPassword);
        if(!editPassword){
            console.log("entrou no if");
            dispatchEdit({type: "EDIT_PASSWORD", payload: !editPassword})
        }else{
            toast.info('Foi enviado ao seu e-mail cadastrado uma nova senha!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className="MinhaConta">
            <div className="imgUser">
                <img className='imgUser' src={user.urlImagemPerfil} alt="imgUser" />
            </div>
            <div className="infoUser">
                <form className='formCadastroRegistro' onSubmit={handleAlterarSenha}>
                    <label className="labelInfo">
                        <span className='poppins'>Primeiro nome:</span>
                        <input type="text" name="firstname" value={user.firstname} placeholder="Digite aqui o seu primeiro nome" readOnly={true} />
                    </label>
                    <label className="labelInfo">
                        <span className='poppins'>Último nome:</span>
                        <input type="text" name="lastname" value={user.lastname} placeholder="Digite aqui o seu último nome" readOnly={true} />
                    </label>
                    <label className="labelInfo">
                        <span className='poppins'>Nome de usuário:</span>
                        <input type="text" name="lastname" value={user.username} placeholder="Digite aqui o nome de seu usuário" readOnly={true} />
                    </label>
                    {editPassword == true &&
                        <label className="labelInfo">
                            <span className='poppins'>Senha:</span>
                            <input type="password" name="password" value={password} placeholder="Digite aqui a sua nova senha" onChange={(e) => setPassword(e.target.value)} readOnly={editPassword} />
                        </label>
                    }
                    {editPassword == false &&
                        <div className="btEsqueciSenha">
                            <input className='btnSubmit' type="submit" value="Alterar minha senha" />
                        </div>
                    }
                    {editPassword == true &&
                        <div className="btEsqueciSenha">
                            <input className='btnSubmit' type="submit" value="Salvar" />
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Account