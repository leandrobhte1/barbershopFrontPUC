import { useUserContext } from '../hooks/useUserContext'
import { useOptionsMenuEmpresaContext } from '../hooks/useOptionsMenuEmpresaContext'
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useState } from "react";
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const Empresa = () => {

    const { user, dispatch } = useUserContext();
    const { options, dispatchOp } = useOptionsMenuEmpresaContext();
    console.log("User.: ", user);

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userCPF, setUserCPF] = useState("");
    const [userUsername, setUserUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(false);

    const [nameEmpresa, setNameEmpresa] = useState("");
    const [descricaoEmpresa, setDescricaoEmpresa] = useState("");
    const [cnpjEmpresa, setCnpjEmpresa] = useState("");
    const [cepEmpresa, setCepEmpresa] = useState("");
    const [ruaEmpresa, setRuaEmpresa] = useState("");
    const [urlImagemEmpresa, setUrlImagemEmpresa] = useState("");
    const [numeroEmpresa, setNumeroEmpresa] = useState("");
    const [bairroEmpresa, setBairroEmpresa] = useState("");
    const [cidadeEmpresa, setCidadeEmpresa] = useState("");
    const [telefoneEmpresa, setTelefoneEmpresa] = useState("");
    const [emailEmpresa, setEmailEmpresa] = useState("");

    const [usernameFunc, setUsernameFunc] = useState("");

    const handleCreateEmpresa = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: true, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};
        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleRegisterEmpresa = (e) => {
        e.preventDefault();
        let empresaAdd = {
            "name": nameEmpresa,
            "dono": user.username,
            "descricao": descricaoEmpresa,
            "cnpj": cnpjEmpresa,
            "cep": cepEmpresa,
            "rua": ruaEmpresa,
            "urlImagem": urlImagemEmpresa,
            "numero": numeroEmpresa,
            "bairro": bairroEmpresa,
            "cidade": cidadeEmpresa,
            "telefone": telefoneEmpresa,
            "email": emailEmpresa
        };
        let token = 'Bearer ' + user.access_token;
        setLoading(true);
        axios.post(`http://localhost:8080/api/empresa/${user.id}/save`, empresaAdd, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        })
        .then(resp => {
            let token = 'Bearer ' + user.access_token;
            axios.get(`http://localhost:8080/api/user/${user.username}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                  }
            }).then(resposta => {
                let userLogin = {
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
                dispatch({type: "LOGIN", payload: userLogin});
                setNameEmpresa("");
                setDescricaoEmpresa("");
                setCnpjEmpresa("");
                setCepEmpresa("");
                setRuaEmpresa("");
                setUrlImagemEmpresa("");
                setNumeroEmpresa("");
                setBairroEmpresa("");
                setCidadeEmpresa("");
                setTelefoneEmpresa("");
                setEmailEmpresa("");
                setLoading(false);
                toast.success('Empresa inserida com sucesso!', {
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

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleAgenda = (e) => {
        e.preventDefault();
        console.log("handle agenda");
        let newOptions =  { newEmpresa: false, agenda: true, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleRelatorios = (e) => {
        e.preventDefault();
        console.log("handleRelatorios");
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: true, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleSearchFunc = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: true, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleSearchServicos = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: true, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleNovoServico = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: true, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleExcluirServico = (e) => {
        e.preventDefault();
        let newOptions = { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: true};
        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
        toast.info('Funcionalidade será implementada na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleNovoFuncionario = (e) => {
        e.preventDefault();
        console.log("handleNovoFuncionario");
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: true, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleExcluirFuncionario = (e) => {
        e.preventDefault();
        console.log("handleExcluirFuncionario");
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: true, excluirServico: false};
        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleDeleteFunc = (e) => {
        e.preventDefault();
        if(usernameFunc == null || usernameFunc == "" || usernameFunc.length < 2){
            toast.error('E-mail do usuário deve ter pelo menos 2 caracteres!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            setLoading(true);
            let token = 'Bearer ' + user.access_token;
            console.log("token.: ", token);
            axios.delete(`${BASE_URL}/empresa/deleteFuncionario`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
                data:{
                    "cnpj": user.empresas[0].cnpj,
                    "funcionarioUsername": usernameFunc
                }
            }).then(resposta => {
                setLoading(false);
                setUsernameFunc("");
                if(resposta.status == 200){
                    toast.success('Funcionário deletado com sucesso!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

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
    }

    const handleRegisterUser = (e) => {
        e.preventDefault();
        if(userFirstName == null || userFirstName == "" || userFirstName.length < 2){
            toast.error('Nome deve ter pelo menos 2 caracteres!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(userLastName == null || userLastName == "" || userLastName.length < 2){
            toast.error('Último nome deve ter pelo menos 2 caracteres!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(userCPF == null || userCPF == "" || userCPF.length < 12){
            toast.error('CPF deve possuir 14 caracteres! Ex: 999.999.999-12', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(userUsername == null || userUsername == "" || userUsername.length < 3){
            toast.error('Nome de usuário deve ter pelo menos 3 caracteres!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(userPassword == null || userPassword == "" || userPassword.length < 8){
            toast.error('Senha deve ter pelo menos 8 caracteres!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(userRole == null || userRole == ""){
            toast.error('Escolha um perfil para seu usuário!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            let userRegister = "";
            if(userRole == "User"){
                userRegister = {
                    "firstname": userFirstName,
                    "lastname": userLastName,
                    "cpf": userCPF,
                    "username": userUsername,
                    "password": userPassword,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        }
                    ]
                };
            }else if(userRole == "Manager"){
                userRegister = {
                    "firstname": userFirstName,
                    "lastname": userLastName,
                    "cpf": userCPF,
                    "username": userUsername,
                    "password": userPassword,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        },
                        {
                            "id": 2,
                            "name": "ROLE_MANAGER"
                        }
                    ]
                };
            }else if(userRole == "Administrador"){
                userRegister = {
                    "firstname": userFirstName,
                    "lastname": userLastName,
                    "cpf": userCPF,
                    "username": userUsername,
                    "password": userPassword,
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
                    "firstname": userFirstName,
                    "lastname": userLastName,
                    "cpf": userCPF,
                    "username": userUsername,
                    "password": userPassword,
                    "roles": [
                        {
                            "id": 1,
                            "name": "ROLE_USER"
                        }
                    ]
                };
            }
            setLoading(true);
            axios.post(`${BASE_URL}/user/save`, userRegister, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(res => {

                let newFunc = {
                    "cnpj": user.empresas[0].cnpj,
                    "funcionarioUsername": userUsername
                }
                let token = 'Bearer ' + user.access_token;
                axios.post(`${BASE_URL}/empresa/addFuncionario`, newFunc, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': token,
                        
                    }
                }).then(resposta => {

                    axios.get(`http://localhost:8080/api/user/${user.username}`, {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Authorization': token
                        }
                    }).then(r => {
                        let userLogin = {
                            "username": r.data.username,
                            "firstname": r.data.firstname,
                            "lastname": r.data.lastname,
                            "cpf": r.data.cpf,
                            "empresas": r.data.empresas,
                            "roles": user.roles,
                            "urlImagemPerfil": r.data.urlImagemPerfil,
                            "logado": true,
                            "access_token": r.data.access_token,
                            "refresh_token": r.data.refresh_token
                        };
                        dispatch({type: "LOGIN", payload: userLogin});

                        setUserFirstName("");
                        setUserLastName("");
                        setUserCPF("");
                        setUserUsername("");
                        setUserPassword("");
                        setUserRole(null);
                        setLoading(false);
                        toast.success('Funcionário salvo com sucesso!', {
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
            })
        }
    }

    console.log("options.: ", options);

    return (
        <div className="empresa">

            {loading && (
                <div className="loadingArea">
                    <h4>CARREGANDO..</h4>
                    <ReactLoading type={'spin'} color={'#1E1E1E'} height={'50%'} width={'50px'}></ReactLoading>
                </div>
            )}
            {(!loading && user.empresas.length == 0 && options.newEmpresa == true) && (
                <div className="criarEmpresa">
                    <h1 className="tittleRightSide poppins">Criar empresa</h1>
                    <form className='empresaFormCadastroRegistro' onSubmit={handleRegisterEmpresa}>
                        <div className="username firstName">
                            <label className='poppins'>
                                <h6 className="poppins">Nome da empresa:</h6>
                                <input type="text" name="nameEmpresa" value={nameEmpresa} placeholder="Digite aqui o nome da empresa" onChange={(e) => setNameEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username lastName">
                            <label className='poppins'>
                                <h6 className="poppins">Descrição:</h6>
                                <textarea className='descriptionEmpresa' type="text" name="lastName" value={descricaoEmpresa} placeholder="Digite aqui uma descrição para sua empresa" onChange={(e) => setDescricaoEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username lastName divImagemEmpresa">
                            <label className='poppins'>
                                <h6 className="poppins">CNPJ:</h6>
                                <input type="text" name="cnpj" value={cnpjEmpresa} placeholder="Digite aqui o CNPJ da empresa" onChange={(e) => setCnpjEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">Endereço de um upload de imagem da sua barbearia:</h6>
                                <input type="text" name="imagem" value={urlImagemEmpresa} placeholder="Endereço de um upload de imagem da sua barbearia" onChange={(e) => setUrlImagemEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">CEP:</h6>
                                <input type="text" name="cep" value={cepEmpresa} placeholder="Digite aqui o CEP da empresa" onChange={(e) => setCepEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="password">
                            <label className='poppins'>
                                <h6 className="poppins">Rua:</h6>
                                <input type="text" name="rua" value={ruaEmpresa} placeholder="Digite aqui a rua da empresa" onChange={(e) => setRuaEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username divImagemEmpresa">
                            <label className='poppins'>
                                <h6 className="poppins">Número:</h6>
                                <input type="text" name="numeroEmpresa" value={numeroEmpresa} placeholder="Digite o número do endereço" onChange={(e) => setNumeroEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">Bairro:</h6>
                                <input type="text" name="bairroEmpresa" value={bairroEmpresa} placeholder="Digite o bairro da empresa" onChange={(e) => setBairroEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">Cidade:</h6>
                                <input type="text" name="cidadeEmpresa" value={cidadeEmpresa} placeholder="Digite aqui a cidade da empresa" onChange={(e) => setCidadeEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">Telefone:</h6>
                                <input type="text" name="telefoneEmpresa" value={telefoneEmpresa} placeholder="Digite aqui o telefone da empresa" onChange={(e) => setTelefoneEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username">
                            <label className='poppins'>
                                <h6 className="poppins">E-mail:</h6>
                                <input type="text" name="emailEmpresa" value={emailEmpresa} placeholder="Digite aqui um e-mail de contato da empresa" onChange={(e) => setEmailEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="btRegistrarUser">
                            <input className='btnSubmit' type="submit" value="Registrar" />
                        </div>
                    </form>
                </div>
            )}
            {(!loading && user.empresas.length == 0 && options.newEmpresa == false) && (<div className="semEmpresa">
                <h2 className="poppins">Você ainda não criou a sua empresa! Desejar criar agora?</h2>
                <input className='btnAgendar' type="button" value="CRIAR EMPRESA" onClick={handleCreateEmpresa} />
            </div>)}
            {(!loading && user.empresas.length == 1) && (
                <div className="telaEmpresa">
                    <div className="empresaSide">
                        <div className="img">
                            <img src={user.empresas[0].urlImagem} alt="Barbershop" className="imgEmpresa" />
                        </div>
                        <div className="textInfo">
                            <p className="nameBarbershop poppins">{user.empresas[0].name}</p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                isHalf= {true}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                classNames="react-stars-avaliation"
                                edit={false}
                            />
                        </div>
                        <div className="buttonsAction">
                            <button className='btnAction' onClick={handleAgenda}>VISUALIZAR AGENDA</button>
                            <button className='btnAction' onClick={handleRelatorios }>VISUALIZAR RELATÓRIOS</button>
                            <button className='btnAction' onClick={handleSearchFunc }>VISUALIZAR FUNCIONÁRIOS</button>
                            <button className='btnAction' onClick={handleSearchServicos }>VISUALIZAR SERVIÇOS</button>
                            <button className='btnAction' onClick={handleNovoServico }>INCLUIR SERVIÇO</button>
                            <button className='btnAction' onClick={handleExcluirServico }>EXCLUIR SERVIÇO</button>
                            <button className='btnAction' onClick={handleNovoFuncionario }>INCLUIR FUNCIONÁRIO</button>
                            <button className='btnAction' onClick={handleExcluirFuncionario }>EXCLUIR FUNCIONÁRIO</button>
                        </div>
                    </div>
                    <div className="empresaRight">
                        {options.agenda == true && (
                            <div className="screen">
                                <h1 className="poppins">Agenda</h1>
                            </div>
                        )}
                        {options.relatorios == true && (
                            <div className="screen">
                                <h1 className="poppins">Relatorios</h1>
                            </div>
                        )}
                        {options.funcionarios == true && (
                            <div className="screen">
                                <h1 className="poppins">Funcionarios</h1>
                                <span className="quantidadeFunc poppins">Funcionários encontrados: {user.empresas[0].funcionarios.length}</span>
                                <ul className='listFunc'>
                                    {user.empresas[0].funcionarios && user.empresas[0].funcionarios.map(f => (
                                        <li key={f.id}>
                                            <div className="cardFunc">
                                                <div className="left">
                                                    <img className='userImagePerfil' src={f.urlImagemPerfil} alt="Funcionario" />
                                                </div>
                                                <div className="right">
                                                    <div className="nameF">
                                                        <span className='poppins funcName'>{f.firstname} </span>
                                                        <span className='poppins funcName'>{f.lastname}</span>
                                                    </div>
                                                    <div className="cpf">
                                                        <span className="poppins">CPF: {f.cpf}</span>
                                                    </div>
                                                    <div className="email">
                                                        <span className="poppins">E-mail/usuário: {f.username}</span>
                                                    </div>
                                                    {/* <div className="perfil">
                                                        <span className="poppins">Perfil: {f.roles}</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {options.servicos == true && (
                            <div className="screen">
                                <h1 className="poppins">Servicos</h1>
                            </div>
                        )}
                        {options.novoServico == true && (
                            <div className="screen">
                                <h1 className="poppins">Novo Serviço</h1>
                            </div>
                        )}
                        {options.excluirServico == true && (
                            <div className="screen">
                                <h1 className="poppins">Excluir Serviço</h1>
                            </div>
                        )}
                        {options.novoFuncionario == true && (
                            <div className="screen">
                                <h1 className="tittleRightSide poppins">Novo funcionário</h1>
                                <div className="cadastro">
                                    <form className='empresaFormCadastroRegistro' onSubmit={handleRegisterUser}>
                                        <div className="username firstName">
                                            <label className='poppins'>
                                                <h6 className="poppins">Primeiro nome:</h6>
                                                <input type="text" name="firstName" value={userFirstName} placeholder="Digite aqui o primeiro nome" onChange={(e) => setUserFirstName(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="username lastName">
                                            <label className='poppins'>
                                                <h6 className="poppins">Último nome:</h6>
                                                <input type="text" name="lastName" value={userLastName} placeholder="Digite aqui o último nome" onChange={(e) => setUserLastName(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="username lastName">
                                            <label className='poppins'>
                                                <h6 className="poppins">CPF:</h6>
                                                <input type="text" name="cpf" value={userCPF} placeholder="Digite aqui o CPF" onChange={(e) => setUserCPF(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="username">
                                            <label className='poppins'>
                                                <h6 className="poppins">E-mail (nome de usuário):</h6>
                                                <input type="text" name="username" value={userUsername} placeholder="Digite aqui o e-mail" onChange={(e) => setUserUsername(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="password">
                                            <label className='poppins'>
                                                <h6 className="poppins">Senha:</h6>
                                                <input type="password" name="password" value={userPassword} placeholder="Digite aqui a senha" onChange={(e) => setUserPassword(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="perfil">
                                            <span className="perfilText poppins">Perfil do usuário:</span>
                                            <div className="optionsPefil">
                                                <div className="option option1">
                                                    <input type="radio" id="user" name="perfil" value="User" onChange={(e) => setUserRole(e.target.value)}></input>
                                                    <label htmlFor="user">Usuário Comum</label>
                                                </div>
                                                <div className="option option2">
                                                    <input type="radio" id="manager" name="perfil" value="Manager" onChange={(e) => setUserRole(e.target.value)}></input>
                                                    <label htmlFor="manager">Gerente</label>
                                                </div>
                                                <div className="option option3">
                                                    <input type="radio" id="admin" name="perfil" value="Administrador" onChange={(e) => setUserRole(e.target.value)}></input>
                                                    <label htmlFor="admin">Administrador</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btRegistrarUser">
                                            <input className='btnSubmit' type="submit" value="Registrar" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {options.excluirFuncionario == true && (
                            <div className="screen">
                                <h1 className="tittleRightSide poppins">Excluir Funcionario</h1>
                                <div className="exclusao">
                                    <form className='empresaFormCadastroRegistro' onSubmit={handleDeleteFunc}>
                                        <div className="username firstName">
                                            <label className='poppins'>
                                                <h6 className="poppins">Digite o e-mail/nome de usuário do funcionário:</h6>
                                                <input type="text" name="usernameFunc" value={usernameFunc} placeholder="Digite aqui o e-mail do funcionário" onChange={(e) => setUsernameFunc(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="btRegistrarUser">
                                            <input className='btnSubmit' type="submit" value="Excluir" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default Empresa