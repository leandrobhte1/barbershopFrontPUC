import { useUserContext } from '../hooks/useUserContext'
import { useOptionsMenuEmpresaContext } from '../hooks/useOptionsMenuEmpresaContext'
import ReactStars from "react-rating-stars-component";

const Empresa = () => {

    const { user } = useUserContext();
    const { options, dispatch } = useOptionsMenuEmpresaContext();
    console.log("User.: ", user);

    const handleCreateEmpresa = (e) => {
        e.preventDefault();
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleAgenda = (e) => {
        e.preventDefault();
        console.log("handle agenda");
        let newOptions = { agenda: true, relatorios: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false};
        dispatch({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleRelatorios = (e) => {
        e.preventDefault();
        console.log("handleRelatorios");
        let newOptions = { agenda: false, relatorios: true, novoUsuario: false, novoFuncionario: false, excluirFuncionario: false};
        dispatch({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleNovoUsuario = (e) => {
        e.preventDefault();
        console.log("handleNovoUsuario");
        let newOptions = { agenda: false, relatorios: false, novoUsuario: true, novoFuncionario: false, excluirFuncionario: false};
        dispatch({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleNovoFuncionario = (e) => {
        e.preventDefault();
        console.log("handleNovoFuncionario");
        let newOptions = { agenda: false, relatorios: false, novoUsuario: false, novoFuncionario: true, excluirFuncionario: false};
        dispatch({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    const handleExcluirFuncionario = (e) => {
        e.preventDefault();
        console.log("handleExcluirFuncionario");
        let newOptions = { agenda: false, relatorios: false, novoUsuario: false, novoFuncionario: false, excluirFuncionario: true};
        dispatch({type: "OPTIONS_MENU_EMPRESA_CHANGED", payload: newOptions});
    }

    console.log("options.: ", options);

    return (
        <div className="empresa">
            {user.empresas.length == 0 && (<div className="semEmpresa">
                <h2 className="poppins">Você ainda não criou a sua empresa! Desejar criar agora?</h2>
                <input className='btnAgendar' type="button" value="CRIAR EMPRESA" onClick={ () => handleCreateEmpresa} />
            </div>)}
            {user.empresas.length == 1 && (
                <div className="telaEmpresa">
                    <div className="empresaSide">
                        <div className="img">
                            <img src={user.empresas[0].urlImagem} alt="Barbershop" className="imgEmpresa" />
                        </div>
                        <div className="textInfo">
                            <p className="poppins">{user.empresas[0].name}</p>
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
                            <button className='btnAction' onClick={handleRelatorios }>VISUALIZAR AGENDA</button>
                            <button className='btnAction' onClick={handleNovoUsuario }>INCLUIR NOVO USUÁRIO</button>
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
                                <h1 className="poppins">relatorios</h1>
                            </div>
                        )}
                        {options.novoUsuario == true && (
                            <div className="screen">
                                <h1 className="poppins">Novo usuário</h1>
                            </div>
                        )}
                        {options.novoFuncionario == true && (
                            <div className="screen">
                                <h1 className="poppins">Novo Funcionario</h1>
                            </div>
                        )}
                        {options.excluirFuncionario == true && (
                            <div className="screen">
                                <h1 className="poppins">Excluir Funcionario</h1>
                            </div>
                        )}
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default Empresa