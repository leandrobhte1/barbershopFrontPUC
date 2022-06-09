import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import ReactStars from "react-rating-stars-component";
import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Lupa from '../images/lupa.png';
import { useState } from "react";
import ReactLoading from 'react-loading';
const BASE_URL = 'https://barbershop-back-puc.herokuapp.com/api'

const Search = () => {

    const { result, dispatchResult } = useResultSearchContext();
    const { barberHome, dispatchBarberHome } = useBarberHomeContext();
    const { search, dispatch } = useSearchContext();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    let pages = [];
    if(result.totalPages < 15){
        for(let i=0; i < result.totalPages;i++){
            pages.push(<li className='poppins' key={i+1} onClick={ () => searchPage(i)}>{i+1}</li>)
        }
    }else{
        for(let i=0; i < 14 ;i++){
            pages.push(<li className='poppins' key={i+1} onClick={ () => searchPage(i)}>{i+1}</li>)
        }
    }
    
    const handleBarberHome = (r) => {
        console.log("r.: ",r);
        dispatchBarberHome({type: "BARBER_HOME_CHANGED", payload: r});
        navigate(`/barberHome/${r.id}`);
    }

    const searchPage = (i) => {
        axios.get(`https://barbershop-back-puc.herokuapp.com/api/empresas/search?searchTerm=${search}&page=${i}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => {
            let dados = resp.data;
            dispatchResult({type: "SEARCH_RESULT", payload: dados});
        });
    }

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            setLoading(true);
            axios.get(`https://barbershop-back-puc.herokuapp.com/api/empresas/search?searchTerm=${search}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(resp => {
                let dados = resp.data;
                dispatchResult({type: "SEARCH_RESULT", payload: dados})
                setLoading(false);
            });
            setLoading(false);
            navigate(`/search?searchTerm=${search}`);
        }
    }

    const handleSearch = (e) => {
        setLoading(true);
        axios.get(`https://barbershop-back-puc.herokuapp.com/api/empresas/search?searchTerm=${search}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => {
            let dados = resp.data;
            dispatchResult({type: "SEARCH_RESULT", payload: dados})
            setLoading(false);
        });
        setLoading(false);
        navigate(`/search?searchTerm=${search}`);
    }

    return (
        <div className="Search">
            <div className="voltar">
                <Link to={'/'}>
                    <img className='voltarPage' src={SetaEsquerda} alt="Voltar" />
                    <span className="voltar poppins">Voltar</span>
                </Link>
            </div>
            {loading && (
                <div className="loadingArea">
                    <h4>CARREGANDO..</h4>
                    <ReactLoading type={'spin'} color={'#1E1E1E'} height={'50%'} width={'50px'}></ReactLoading>
                </div>
            )}
            {!loading && (
            <div className="results">
                <h3 className="poppins">Resultado de sua busca:</h3>
                <div className="pesquisa">
                    <input id="searchInput" className='form-control' type="text" placeholder="Digite aqui a sua busca" onChange={ (e) => dispatch({type: "SEARCH_CHANGED", payload: e.target.value}) } value={search} onKeyUp={keyHandler} />
                    <img src={Lupa} alt="Pesquisar" onClick={handleSearch} />
                </div>
                <span className='poppins'>Resultados encontrados: {result.totalElements}</span>
                <ul>
                    {result.content && result.content.map(r => (
                        <li key={r.id}>
                            <div className="barberLine">
                                <img className='barberImg' src={r.urlImagem} alt="barber" />
                                <div className="text">
                                    <span className='poppins barberTittle'>{r.name}</span>
                                    <ReactStars
                                        count={5}
                                        size={16}
                                        activeColor="#ffd700"
                                        isHalf= {true}
                                        value={4.2}
                                        classNames="react-stars-search"
                                        edit={false}
                                    />
                                    <span className='poppins barberDescription'>{r.descricao}</span>
                                    <button className='poppins' onClick={ () => handleBarberHome(r)}>CONHEÇA</button>
                                </div>
                            </div>
                        </li>
                    ))} 
                </ul>
                <ul className="pagesSearch">
                    {pages}
                </ul>
            </div>
            )}
        </div>
    )
}

export default Search