import { useUserContext } from '../hooks/useUserContext'
import { useOptionsMenuEmpresaContext } from '../hooks/useOptionsMenuEmpresaContext'
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import moment from 'moment';
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const Empresa = () => {

    const [value, onChange] = useState(new Date());
    const [availableDaysList, setAvailableDaysList] = useState([]);
    const [horariosLivres, setHorariosLivres] = useState([]);

    const [dateClicked, setDateClicked] = useState("");

    const [unidade, setUnidade] = useState("");
    const [tipoRelatorio, setTipoRelatorio] = useState("");
    const [download, setDownload] = useState("");
    const [tempo, setTempo] = useState("");

    const handleRelatorioView = (e) => {
        e.preventDefault();
        console.log("tipoRelatorio.: ", tipoRelatorio);
        console.log("tempo.: ", tempo);

        if(tipoRelatorio == 'historicoAgendamentos'){
            
        }else if(tipoRelatorio == 'agendamentosFuturos'){

        }else{

        }

        toast.info('Funcionalidade ainda não implementada! Será entregue na etapa 3!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    useEffect(() => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let todayDate = dd + '-' + mm + '-' + yyyy;
        //todayDate = "14-08-2022";
        let token = 'Bearer ' + user.access_token;
        axios.get(`http://localhost:8080/api/agenda/month?date=${todayDate}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        }).then(resposta => {
            for(let i = 0; i < resposta.data.length; i++){
                let arrayy = availableDaysList;
                arrayy.indexOf(resposta.data[i].date) === -1 ? arrayy.push(resposta.data[i].date) : console.log();
                setAvailableDaysList(arrayy);
            }
        })

    }, [availableDaysList]);

    const { user, dispatch } = useUserContext();
    const { options, dispatchOp } = useOptionsMenuEmpresaContext();
    const { barberHome, dispatchBarberHome } = useBarberHomeContext();

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

    const [serviceList, setServiceList] = useState({});

    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [serviceEmpresaId, setServiceEmpresaId] = useState("");
    const [serviceValor, setServiceValor] = useState("");

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
        let newOptions =  { newEmpresa: false, agenda: true, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleRelatorios = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: true, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
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
    }

    const handleNovoServico = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: true, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleExcluirServico = (e) => {
        e.preventDefault();
        setServiceList(user.empresas[0].servicos);
        let newOptions = { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false, excluirServico: true};
        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleNovoFuncionario = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: true, excluirFuncionario: false, excluirServico: false};

        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleExcluirFuncionario = (e) => {
        e.preventDefault();
        let newOptions =  { newEmpresa: false, agenda: false, relatorios: false, funcionarios: false, servicos: false, novoServico: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: true, excluirServico: false};
        dispatchOp({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleExcluirService = (e) => {
        e.preventDefault();
        setLoading(true);
            let token = 'Bearer ' + user.access_token;
            let dataaa = {
                "idEmpresa": user.empresas[0].id,
                "idServico": e.target.classList[1]
            }
            axios.delete(`${BASE_URL}/empresa/deleteServico`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
                data:{
                    "idEmpresa": user.empresas[0].id,
                    "idServico": e.target.classList[1]
                }
            }).then(resposta => {
                setLoading(false);
                toast.success('Serviço deletado com sucesso!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).catch(e=> {
                setLoading(false);
                toast.error('Erro inesperado ao deletar serviço!', {
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

    const handleAddService = (e) => {
        e.preventDefault();
        setLoading(true);
        let newService = {
            "nome": serviceName,
            "descricao": serviceDescription,
            "empresaId": user.empresas[0].id,
            "valor": serviceValor
        };
        let token = 'Bearer ' + user.access_token;
        axios.post(`${BASE_URL}/empresa/addServico`, newService, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token,
                
            }
        })
        .then(res => {
            setLoading(false);
            toast.success('Serviço salvo com sucesso!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(e=> {
            setServiceName("");
            setServiceDescription("");
            setServiceValor("");
            setLoading(false);
            toast.error('Erro inesperado ao adicionar serviço!', {
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
                            "access_token": user.access_token,
                            "refresh_token": user.refresh_token
                        };
                        dispatch({type: "LOGIN", payload: userLogin});
                        dispatchBarberHome({type: "BARBER_HOME_CHANGED", payload: userLogin.empresas[0]});
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

    function tileClassName({ date }) {
        let newDate = date.toISOString().substring(0, 10);
        let split = newDate.toString().split("-");
        let day = split[2];
        let month = split[1];
        let year = split[0];
        let fullDate = year+"-"+month+"-"+day;

        // for(let i = 0; i < busyDaysList.length; i++){
        //   if(fullDate == busyDaysList[i]){
        //     return fullDate+" busyDay";
        //   }
        // }

        for(let i = 0; i < availableDaysList.length; i++){
          if(fullDate == availableDaysList[i]){
            return fullDate+" availableDay";
          }
        }
        
        return fullDate;
    }

    const callDay = (clikedDay) => {
        let dateFormatted = formatDate(clikedDay);
        setDateClicked(dateFormatted);
        let token = 'Bearer ' + user.access_token;
        axios.get(`${BASE_URL}/agenda/admin/agendados?date=${dateFormatted}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token,
                
            }
        }).then(resposta => {
            let hlivres = resposta.data;
            let newData = resposta.data[0][3];
            setHorariosLivres(hlivres);

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
    };

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
      
    function formatDate(date) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }

    function formatDateBr(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-');
    }

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
                        <div className="username empresa firstName">
                            <label className='poppins'>
                                <h6 className="poppins">Nome da empresa:</h6>
                                <input type="text" name="nameEmpresa" value={nameEmpresa} placeholder="Digite aqui o nome da empresa" onChange={(e) => setNameEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa lastName">
                            <label className='poppins'>
                                <h6 className="poppins">Descrição:</h6>
                                <textarea className='descriptionEmpresa' type="text" name="lastName" value={descricaoEmpresa} placeholder="Digite aqui uma descrição para sua empresa" onChange={(e) => setDescricaoEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa lastName divImagemEmpresa">
                            <label className='poppins'>
                                <h6 className="poppins">CNPJ:</h6>
                                <input type="text" name="cnpj" value={cnpjEmpresa} placeholder="Digite aqui o CNPJ da empresa" onChange={(e) => setCnpjEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">URL de um upload de imagem da sua barbearia:</h6>
                                <input type="text" name="imagem" value={urlImagemEmpresa} placeholder="Endereço de um upload de imagem da sua barbearia" onChange={(e) => setUrlImagemEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">CEP:</h6>
                                <input type="text" name="cep" value={cepEmpresa} placeholder="Digite aqui o CEP da empresa" onChange={(e) => setCepEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">Rua:</h6>
                                <input type="text" name="rua" value={ruaEmpresa} placeholder="Digite aqui a rua da empresa" onChange={(e) => setRuaEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa divImagemEmpresa">
                            <label className='poppins'>
                                <h6 className="poppins">Número:</h6>
                                <input type="text" name="numeroEmpresa" value={numeroEmpresa} placeholder="Digite o número do endereço" onChange={(e) => setNumeroEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">Bairro:</h6>
                                <input type="text" name="bairroEmpresa" value={bairroEmpresa} placeholder="Digite o bairro da empresa" onChange={(e) => setBairroEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">Cidade:</h6>
                                <input type="text" name="cidadeEmpresa" value={cidadeEmpresa} placeholder="Digite aqui a cidade da empresa" onChange={(e) => setCidadeEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
                            <label className='poppins'>
                                <h6 className="poppins">Telefone:</h6>
                                <input type="text" name="telefoneEmpresa" value={telefoneEmpresa} placeholder="Digite aqui o telefone da empresa" onChange={(e) => setTelefoneEmpresa(e.target.value)} />
                            </label>
                        </div>
                        <div className="username empresa">
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
            {(!loading && user.empresas.length > 0) && (
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
                                <Calendar onChange={onChange} value={value} className="agendaCalendar" tileClassName={tileClassName} onClickDay={callDay} />
                                <span className="poppins">Horários agendados no dia {dateClicked}:</span>
                                {horariosLivres && horariosLivres.map(h => (
                                    <div className="horario">
                                        <p className="poppins">Cliente: {h[1]} {h[2]}</p>
                                        <p className="poppins">Data: {h[3]}</p>
                                        <p className="poppins">Horário: {h[4]}</p>
                                        <p className="poppins">Serviço: {h[5]}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {options.relatorios == true && (
                            <div className="screen">
                                <h1 className="poppins">Relatorios</h1>

                                <form className='formRelatorios' onSubmit={handleRelatorioView}>

                                    <div className="tipoRelatorioSection">
                                        <h3 className="itemTittle poppins">Tipo de relatório</h3>
                                        <select className='selectTipoRelatorio poppins' name="tipoRelatorio" value={tipoRelatorio} onChange={ (e) => setTipoRelatorio(e.target.value)}>
                                            <option className='poppins' value="valor0" defaultValue>Escolha um tipo de relatório</option>
                                            <option className='poppins' value="historicoAgendamentos">Histórico de agendamentos</option>
                                            <option className='poppins' value="agendamentosFuturos">Agendamentos futuros</option>
                                            {/* <option className='poppins' value="valor3">Serviços mais lucrativos</option> */}
                                        </select>
                                    </div>
                                    {/* <div className="formatoDownloadSection">
                                        <h3 className="itemTittle poppins">Extensão do arquivo:</h3>
                                        <div className="optionsFormatoDowload">
                                            <div className="option option1">
                                                <input type="radio" id="pdf" value="PDF" name="download" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="pdf">PDF</label>
                                            </div>
                                            <div className="option option2">
                                                <input type="radio" id="excel" name="download" value="Excel" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="excel">Excel</label>
                                            </div>
                                            <div className="option option3">
                                                <input type="radio" id="word" name="download" value="Word" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="word">Word</label>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="filtroTempoSection">
                                        <h3 className="itemTittle poppins">Filtro de tempo</h3>
                                        <div className="optionsFiltroTempo">
                                            <div className="option option1">
                                                <input type="radio" id="seteDias" name="tempo" value="7dias" onChange={(e) => setTempo(e.target.value)}></input>
                                                <label htmlFor="seteDias">7 Dias</label>
                                            </div>
                                            <div className="option option2">
                                                <input type="radio" id="lastMonth" name="tempo" value="30dias" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="lastMonth">30 dias</label>
                                            </div>
                                            <div className="option option3">
                                                <input type="radio" id="last3Months" name="tempo" value="90dias" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="last3Months">90 dias</label>
                                            </div>
                                            {/* <div className="option option3">
                                                <input type="radio" id="anual" name="tempo" value="anual" onChange={(e) => setDownload(e.target.value)}></input>
                                                <label htmlFor="anual">Ano</label>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="baixarRelatorioBT">
                                        <button type='submit' className='poppins'>VISUALIZAR RELATÓRIO</button>
                                    </div>

                                </form>

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
                                {user.empresas[0].servicos && user.empresas[0].servicos.map(s => (
                                    <div className="serviceCard" key={s.id}>
                                        <div className="serviceCardName">
                                            <p className='poppins'>{s.nome}</p>
                                        </div>
                                        <div className="serviceCardDescription">
                                            <p className='poppins'>{s.descricao}</p>
                                        </div>
                                        <div className="serviceCardValue">
                                            <p className='poppins'>{s.valor}</p>
                                        </div>
                                        {/* <div className="buttonExcluir">
                                            <button className='btExcluirService' onClick={handleExcluirService}>Excluir serviço</button>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        )}
                        {options.novoServico == true && (
                            <div className="screen">
                                <h1 className="poppins">Novo Serviço</h1>
                                <form className='empresaFormCadastroRegistro' onSubmit={handleAddService}>
                                    <div className="username firstName noBackground">
                                        <label className='poppins'>
                                            <h6 className="poppins">Nome do serviço:</h6>
                                            <input type="text" name="serviceName" value={serviceName} placeholder="Digite aqui o nome do serviço" onChange={(e) => setServiceName(e.target.value)} />
                                        </label>
                                    </div>
                                    <div className="username firstName noBackground">
                                        <label className='poppins'>
                                            <h6 className="poppins">Descrição do serviço:</h6>
                                            <input type="text" name="serviceDescription" value={serviceDescription} placeholder="Digite aqui a descrição do serviço" onChange={(e) => setServiceDescription(e.target.value)} />
                                        </label>
                                    </div>
                                    <div className="username firstName noBackground">
                                        <label className='poppins'>
                                            <h6 className="poppins">Valor: <small className='smallFontSize'>Ex.: 59.90</small></h6>
                                            <input type="text" name="serviceValor" value={serviceValor} placeholder="Digite aqui o valor do serviço" onChange={(e) => setServiceValor(e.target.value)} />
                                        </label>
                                    </div>
                                    <div className="btRegistrarUser">
                                        <input className='btnSubmit' type="submit" value="Salvar" />
                                    </div>
                                </form>
                            </div>
                        )}
                        {options.excluirServico == true && (
                            <div className="screen">
                                <h1 className="poppins">Excluir Serviço</h1>
                                {user.empresas[0].servicos && user.empresas[0].servicos.map(s => (
                                    <div className="serviceCard" key={s.id}>
                                        <div className="serviceCardName">
                                            <p className='poppins'>{s.nome}</p>
                                        </div>
                                        <div className="serviceCardDescription">
                                            <p className='poppins'>{s.descricao}</p>
                                        </div>
                                        <div className="serviceCardValue">
                                            <p className='poppins'>{s.valor}</p>
                                        </div>
                                        <div className="buttonExcluir">
                                            <button className={`btExcluirService ${s.id}`} onClick={(e) => handleExcluirService(e)}>Excluir serviço</button>
                                        </div>
                                    </div>
                                ))}
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