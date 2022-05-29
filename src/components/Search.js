import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import ReactStars from "react-rating-stars-component";
import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
const BASE_URL = 'http://localhost:8080/api'

const Search = () => {

    const { result, dispatchResult } = useResultSearchContext();
    const { search } = useSearchContext();

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
    

    const searchPage = (i) => {
        axios.get(`http://localhost:8080/api/empresas/search?searchTerm=${search}&page=${i}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => {
            let dados = resp.data;
            dispatchResult({type: "SEARCH_RESULT", payload: dados});
        });
    }

    console.log("result.: ", result);

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
                                    <button className='poppins'>CONHEÇA</button>
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