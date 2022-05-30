import { useUserContext } from '../hooks/useUserContext'
import { useState } from "react";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

const Account = () => {

    const { user, dispatchUser } = useUserContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log("user.: ", user);

    const handleEsqueciSenha = (e) => {
        e.preventDefault();
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

    return (
        <div className="MinhaConta">
            <div className="imgUser">
                <img className='imgUser' src={user.urlImagemPerfil} alt="imgUser" />
            </div>
            <div className="infoUser">
                <form className='formCadastroRegistro' onSubmit={handleEsqueciSenha}>
                    <label className="labelInfo">
                        <span className='poppins'>Primeiro nome:</span>
                        <input type="text" name="firstname" value={user.firstname} placeholder="Digite aqui o seu primeiro nome" onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <label className="labelInfo">
                        <span className='poppins'>Último nome:</span>
                        <input type="text" name="lastname" value={user.lastname} placeholder="Digite aqui o seu último nome" onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <label className="labelInfo">
                        <span className='poppins'>Nome de usuário:</span>
                        <input type="text" name="lastname" value={user.username} placeholder="Digite aqui o nome de seu usuário" onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <div className="btEsqueciSenha">
                        <input className='btnSubmit' type="submit" value="Esqueci minha senha" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account