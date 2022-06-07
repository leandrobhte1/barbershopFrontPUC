import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'
import ReactStars from "react-rating-stars-component";
import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useNavigate } from "react-router-dom";
const BASE_URL = 'https://barbershop-back-puc.herokuapp.com/api'

const Search = () => {

    const { result, dispatchResult } = useResultSearchContext();
    const { barberHome, dispatchBarberHome } = useBarberHomeContext();
    const { search } = useSearchContext();
    const navigate = useNavigate()

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

    return (
        <div className="Search">
            <div className="voltar">
                <Link to={'/home'}>
                    <img className='voltarPage' src={SetaEsquerda} alt="Voltar" />
                    <span className="voltar poppins">Voltar</span>
                </Link>
            </div>
            <div className="results">
                <h3 className="poppins">Resultado de sua busca:</h3>
                <input id="searchInput" className='form-control' type="text" value={search} readOnly={true} />
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
        </div>
    )
}

export default Search