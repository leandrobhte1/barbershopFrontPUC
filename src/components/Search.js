import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import ReactStars from "react-rating-stars-component";
import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const Search = () => {

    const { result, dispatch } = useResultSearchContext();
    const { search } = useSearchContext();
    let dados = [];
    let resultadosEncontrados = 0;

    if(result.length == 0){
        axios.get(`http://localhost:8080/api/empresas/search?searchTerm=${search}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => {
            dados = resp.data;
            resultadosEncontrados = resp.data.totalElements;
            dispatch({type: "SEARCH_RESULT", payload: dados})
            console.log("dados.: ",dados);
            
        });
        console.log("result.: ", result);
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
                                        value={4.5}
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
            </div>
        </div>
    )
}

export default Search