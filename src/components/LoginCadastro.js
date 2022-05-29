import { useUserContext } from '../hooks/useUserContext'
import { useState } from "react";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'


const LoginCadastro = () => {
    const { user, dispatch } = useUserContext();

    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLoginRedesSociais = (e) => {
        toast.error('Erro: Funcionalidade ainda não foi implementada!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(usernameLogin == null || usernameLogin == "" || usernameLogin.length < 3){
            toast.error('Nome de usuário deve ter pelo menos 3 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(passwordLogin == null || passwordLogin == "" || passwordLogin.length < 8){
            toast.error('Senha deve ter pelo menos 8 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{

            const formData = new FormData();
            formData.append('username',usernameLogin)
            formData.append('password',passwordLogin)

            axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

            setLoading(true);

            axios.post(`http://localhost:8080/api/login`, formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'multipart/form-data',
                  }
            })
            .then(resp => {
                setUsernameLogin("");
                setPasswordLogin("");

                let finalRole = "";
                let rolesarray = resp.data.roles.split(",");
                if(rolesarray.includes("ROLE_SUPER_ADMIN") || rolesarray.includes(' ROLE_SUPER_ADMIN')){
                    finalRole = "SUPER ADMIN";
                }else if(rolesarray.includes("ROLE_ADMIN") || rolesarray.includes(' ROLE_ADMIN')){
                    finalRole = "ADMIN";
                }
                else if(rolesarray.includes("ROLE_MANAGER") || rolesarray.includes(' ROLE_MANAGER')){
                    finalRole = "MANAGER";
                }else{
                    finalRole = "USER";
                }
                

                let userLogin = {
                    "username": usernameLogin,
                    "roles": finalRole,
                    "logado": true,
                    "access_token": resp.data.access_token,
                    "refresh_token": resp.data.refresh_token
                };
                dispatch({type: "LOGIN", payload: userLogin});
                setLoading(false);
                toast.success('Login realizado com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
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
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if(firstName == null || firstName == "" || firstName.length < 2){
            toast.error('Nome deve ter pelo menos 2 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(lastName == null || lastName == "" || lastName.length < 2){
            toast.error('Último nome deve ter pelo menos 2 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(username == null || username == "" || username.length < 3){
            toast.error('Nome de usuário deve ter pelo menos 3 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(password == null || password == "" || password.length < 8){
            toast.error('Senha deve ter pelo menos 8 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(role == null || role == ""){
            toast.error('Escolha um perfil para seu usuário!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            let userRegister = "";
            if(role == "Cliente"){
                userRegister = {
                    "firstname": firstName,
                    "lastname": lastName,
                    "username": username,
                    "password": password,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        }
                    ]
                };
            }else if(role == "Administrador"){
                userRegister = {
                    "firstname": firstName,
                    "lastname": lastName,
                    "username": username,
                    "password": password,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        },
                        {
                            "id": 2,
                            "name": "ROLE_MANAGER"
                        },
                        {
                            "id": 3,
                            "name": "ROLE_ADMIN"
                        }
                    ]
                };
            }else{
                userRegister = {
                    "firstname": firstName,
                    "lastname": lastName,
                    "username": username,
                    "password": password,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        }
                    ]
                };
            }
            setLoading(true);
            axios.post(`${BASE_URL}/user/save`, userRegister)
            .then(resp => {
                setFirstName("");
                setLastName("");
                setUsername("");
                setPassword("");
                setRole(null);
                setLoading(false);
                toast.success('Usuário salvo com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
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
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
        }
    }

    const keyHandlerLogin = (e) => {
        if(e.key === 'Enter') {
            handleLogin(e);
        }
    }

    return (
        <div className="loginCadastro">
            {loading && (
                <div className="loadingArea">
                    <h4>CARREGANDO..</h4>
                    <ReactLoading type={'spin'} color={'#1E1E1E'} height={'50%'} width={'50%'}></ReactLoading>
                </div>
            )}
            {!loading && (
                <div className="area">
                    <div className="login">
                        <form className='formCadastroRegistro' onSubmit={handleLogin}>
                            <h1 className="poppins">Login</h1>
                            <div className="username">
                                <input type="text" name="usernameLogin" value={usernameLogin} placeholder="Digite aqui o seu e-mail" onChange={(e) => setUsernameLogin(e.target.value)} />
                            </div>
                            <div className="password">
                                <input type="password" name="passwordLogin" value={passwordLogin} placeholder="Digite aqui a sua senha" onChange={(e) => setPasswordLogin(e.target.value)} onKeyUp={keyHandlerLogin} />
                            </div>
                            <div className="btLogin">
                                <input className='btnSubmit' type="submit" value="Login" />
                            </div>
                            <div className="orLogin">
                                <div className="line"></div>
                                <span className='poppins orText'>or</span>
                                <div className="line"></div>
                            </div>
                            <div className="redesSociais">
                                <div className="facebook">
                                    <button className="facebookBt poppins" onClick={handleLoginRedesSociais}>Facebook</button>
                                </div>
                                <div className="google">
                                    <button className="googleBt poppins" onClick={handleLoginRedesSociais}>Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="lineBetween"></div>
                    <div className="cadastro">
                        <form className='formCadastroRegistro' onSubmit={handleRegister}>
                            <h1 className="poppins">Registre-se</h1>
                            <div className="username firstName">
                                <input type="text" name="firstName" value={firstName} placeholder="Digite aqui o seu primeiro nome" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="username lastName">
                                <input type="text" name="lastName" value={lastName} placeholder="Digite aqui o seu último nome" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="username">
                                <input type="text" name="username" value={username} placeholder="Digite aqui o seu e-mail" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="password">
                                <input type="password" name="password" value={password} placeholder="Digite aqui a sua senha" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="perfil">
                                <span className="perfilText poppins">Perfil:</span>
                                <div className="optionsPefil">
                                    <div className="option1">
                                        <input type="radio" id="cliente" name="perfil" value="Cliente" onChange={(e) => setRole(e.target.value)}></input>
                                        <label htmlFor="cliente">Cliente</label>
                                    </div>
                                    <div className="option2">
                                        <input type="radio" id="administrador" name="perfil" value="Administrador" onChange={(e) => setRole(e.target.value)}></input>
                                        <label htmlFor="cliente">Administrador</label>
                                    </div>
                                </div>
                            </div>
                            <div className="btRegistrar">
                                <input className='btnSubmit' type="submit" value="Registrar" />
                            </div>
                            <div className="orLogin">
                                <div className="line"></div>
                                <span className='poppins orText'>or</span>
                                <div className="line"></div>
                            </div>
                            <div className="redesSociais">
                                <div className="facebook">
                                    <button className="facebookBt poppins" onClick={handleLoginRedesSociais}>Facebook</button>
                                </div>
                                <div className="google">
                                    <button className="googleBt poppins" onClick={handleLoginRedesSociais}>Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default LoginCadastro