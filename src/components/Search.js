import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import SetaEsquerda from '../images/setaEsquerda.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

const Search = () => {

    const { result, dispatch } = useResultSearchContext();
    const { search } = useSearchContext();
    let dados = [];

    if(result.length == 0){
        axios.get(`http://localhost:8080/api/empresas/search?searchTerm=${search}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => {
            dados = resp.data.content;
            dispatch({type: "SEARCH_RESULT", payload: dados})
        });
    
        if(result){
            console.log("result.: ", result);
        }
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
                <ul>
                    {result && result.map(r => (
                        <li key={r.id}>
                            <div className="barber">
                                <img className='barberImg' src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="barber" />
                                <div className="text">
                                    {r.name}
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