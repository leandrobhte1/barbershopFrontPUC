import { useUserContext } from '../hooks/useUserContext'
import { useEditPasswordContext } from '../hooks/useEditPasswordContext'
import { useState } from "react";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
const BASE_URL = 'https://barbershop-backend-puc.herokuapp.com/api'

const Account = () => {

    const { user, dispatch } = useUserContext();
    const { editAccount, dispatchEdit } = useEditPasswordContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const [urlImagem, setUrlImagem] = useState("");
    const [senhaUser, setSenhaUser] = useState("");

    const handleChangeFoto = (e) => {
        e.preventDefault();
        dispatchEdit({type: "EDIT_ACCOUNT", payload: { editPassword: false, editFoto: !editAccount.editFoto}});
    }

    const handleAlterarFoto = (e) => {
        let token = 'Bearer ' + user.access_token;
        setLoading(true);
        axios.get(`https://barbershop-backend-puc.herokuapp.com/api/user/${user.username}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
                }
        }).then(resp => {
            let newUser = {
                "firstname": resp.data.firstname,
                "lastname": resp.data.lastname,
                "urlImagemPerfil": urlImagem,
                "empresas": resp.data.empresas,
                "cpf": resp.data.cpf,
                "username": resp.data.username,
                "password": senhaUser,
                "roles": resp.data.roles,
            }
            axios.put(`https://barbershop-backend-puc.herokuapp.com/api/user/${user.username}`, newUser ,{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                    }
            }).then(resposta => {
                console.log("resposta.: ", resposta);
                let userAlterado = {
                    "id": resposta.data.id,
                    "username": resposta.data.username,
                    "firstname": resposta.data.firstname,
                    "lastname": resposta.data.lastname,
                    "cpf": resposta.data.cpf,
                    "empresas": resposta.data.empresas,
                    "roles": user.roles,
                    "urlImagemPerfil": resposta.data.urlImagemPerfil,
                    "logado": true,
                    "access_token": user.access_token,
                    "refresh_token": user.refresh_token
                };
                console.log("userAlterado.: ", userAlterado);
                dispatch({type: "LOGIN", payload: userAlterado});
                dispatchEdit({type: "EDIT_ACCOUNT", payload: { editPassword: false, editFoto: false}});
                setSenhaUser("");
                setUrlImagem("");
                setLoading(false);
                toast.success('Imagem alterada com sucesso!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })

        }).catch(e=> {
            setLoading(false);
            toast.error('Erro inesperado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    const handleAlterarSenha = (e) => {
        e.preventDefault();
        console.log("editAccount.: ", editAccount);
        if(!editAccount.editPassword){
            console.log("entrou no if");
            dispatchEdit({type: "EDIT_ACCOUNT", payload: { editPassword: !editAccount.editPassword, editFoto: false}});
        }else{
            let newUser = [];
            console.log("user.: ", user);
            if(user.roles == 'SUPER ADMIN'){
                newUser = {
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "username": user.username,
                    "password": password,
                    "cpf": user.cpf,
                    "roles": [
                        {
                            "id": 2,
                            "name": "ROLE_USER"
                        },
                        {
                            "id": 3,
                            "name": "ROLE_MANAGER"
                        },
                        {
                            "id": 4,
                            "name": "ROLE_ADMIN"
                        },
                        {
                            "id": 5,
                            "name": "ROLE_SUPER_ADMIN"
                        }
                    ]
                };
            }else if(user.roles == 'ADMIN'){
                newUser = {
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "username": user.username,
                    "password": password,
                    "cpf": user.cpf,
                    "roles": [
                        {
                            "id": 2,
                            "name": "ROLE_USER"
                        },
                        {
                            "id": 3,
                            "name": "ROLE_MANAGER"
                        },
                        {
                            "id": 4,
                            "name": "ROLE_ADMIN"
                        }
                    ]
                };
            }else if(user.roles == 'MANAGER'){
                newUser = {
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "username": user.username,
                    "password": password,
                    "cpf": user.cpf,
                    "roles": [
                        {
                            "id": 2,
                            "name": "ROLE_USER"
                        },
                        {
                            "id": 3,
                            "name": "ROLE_MANAGER"
                        }
                    ]
                };
            }else{
                newUser = {
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "username": user.username,
                    "password": password,
                    "cpf": user.cpf,
                    "roles": [
                        {
                            "id": 2,
                            "name": "ROLE_USER"
                        }
                    ]
                };
            }
            let token = 'Bearer ' + user.access_token;
            console.log("newUser.: ", newUser);
            setLoading(true);
            axios.put(`${BASE_URL}/user/${user.username}`, newUser,{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                }
            })
            .then(resp => {
                console.log("resp.: ", resp);
                setLoading(false);
                toast.success('Sua senha foi alterada!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(e=> {
                setLoading(false);
                toast.error('Erro inesperado!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            
        }
    }

    console.log("editAccount.: ", editAccount);

    return (
        <div className="account">
            {loading && (
                <div className="loadingArea">
                    <h4>CARREGANDO..</h4>
                    <ReactLoading type={'spin'} color={'#1E1E1E'} height={'50%'} width={'50px'}></ReactLoading>
                </div>
            )}
            {!loading && (
                <div className="MinhaConta">
                    <div className="imgUser">
                        <img className='imgUser' src={user.urlImagemPerfil} alt="imgUser" />
                        <div className="changeFoto">
                            <span className='poppins' onClick={handleChangeFoto}>Alterar minha foto</span>
                        </div>
                    </div>
                    <div className="infoUser">
                    {editAccount.editFoto == true &&
                        <form className='changeFotoDiv' onSubmit={handleAlterarFoto}>
                            <label className="labelInfo">
                                <span className='poppins'>Cole uma URL da imagem que será sua nova imagem de perfil:</span>
                                <input type="text" name="urlImagem" value={urlImagem} placeholder="Cole aqui a url da imagem que será sua nova imagem de perfil" onChange={(e) => setUrlImagem(e.target.value)} />
                            </label>
                            <label className="labelInfo">
                                <span className='poppins'>Digite a sua senha:</span>
                                <input type="password" name="password" value={senhaUser} placeholder="Digite aqui a sua senha" onChange={(e) => setSenhaUser(e.target.value)} />
                            </label>
                            <div className="btEsqueciSenha">
                                <input className='btnSubmit' type="submit" value="Salvar" />
                            </div>
                        </form>
                    }
                    {editAccount.editFoto == false &&
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
                            {editAccount.editPassword == true &&
                                <label className="labelInfo">
                                    <span className='poppins'>Senha:</span>
                                    <input type="password" name="password" value={password} placeholder="Digite aqui a sua nova senha" onChange={(e) => setPassword(e.target.value)} readOnly={!editAccount.editPassword} />
                                </label>
                            }
                            {editAccount.editPassword == false &&
                                <div className="btEsqueciSenha">
                                    <input className='btnSubmit' type="submit" value="Alterar minha senha" />
                                </div>
                            }
                            {editAccount.editPassword == true &&
                                <div className="btEsqueciSenha">
                                    <input className='btnSubmit' type="submit" value="Salvar" />
                                </div>
                            }
                        </form>
                    }
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Account