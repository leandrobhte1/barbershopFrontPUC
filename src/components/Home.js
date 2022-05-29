import { useUserContext } from '../hooks/useUserContext'
import { useSearchContext } from '../hooks/useSearchContext'
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import Vantagens from './Vantagens'
import HomeAgenda from './HomeAgenda'
import Galeria from './Galeria'
import Avaliacoes from './Avaliacoes'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import LogoHome from '../images/logo.png'
import banner from '../images/banner.png'

const Home = () => {
    const { search, dispatch } = useSearchContext();
    const { result, dispatchResult } = useResultSearchContext();
    const navigate = useNavigate()

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            axios.get(`http://localhost:8080/api/empresas/search?searchTerm=${search}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(resp => {
                let dados = resp.data;
                dispatchResult({type: "SEARCH_RESULT", payload: dados})
                console.log("dados.: ",dados);
                
            });
            console.log("result.: ", result);
            navigate(`/search?searchTerm=${e.target.value}`);
        }
    }

    return (
        <div className='home'>
            <img className="logoBarberShopHome" src={LogoHome} alt="Logo"></img>
            <img className='bannerImage img-fluid' src={banner} alt="Banner" />
            <h1 className='titleBanner poppins'>Encontre A Barbearia</h1> <h1 className='titleBanner2 poppins'>perto de você</h1>
            <h3 className='subtitleBanner poppins'>A comôdidade do seu lado!</h3>
            <h5 className='searchBanner poppins'>Pesquise pelo nome da barbearia ou serviço:</h5>
            <div className="searchBannerInput">
                <input id="searchHome" className='form-control' type="text" placeholder="Digite aqui a sua busca" onChange={ (e) => dispatch({type: "SEARCH_CHANGED", payload: e.target.value}) } value={search} onKeyUp={keyHandler} />
            </div>
            <Vantagens></Vantagens>
            {/* <BestBarberShops></BestBarberShops> */}
            <HomeAgenda></HomeAgenda>
            <Galeria></Galeria>
            <Avaliacoes></Avaliacoes>
        </div>
    )
}

export default Home