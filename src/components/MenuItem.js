import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useResultSearchContext } from '../hooks/useResultSearchContext'
import { ToastContainer, toast } from 'react-toastify';

const MenuItem = (props) => {
  const navigate = useNavigate()
  const { result, dispatchResult } = useResultSearchContext();

  const handleNoPage = (e) => {
    toast.info('Tela não foi criada! Não era requisito criar todas as telas do sistema!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://barbershop-back-puc.herokuapp.com/api/empresas/search?searchTerm=`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then(resp => {
        let dados = resp.data;
        dispatchResult({type: "SEARCH_RESULT", payload: dados})
        
    });
    navigate(`/search?searchTerm=`);
  }

  return (
    <li>
      {props.path == 'barbearias' && (
          <Link to={props.path} onClick={handleSearch}>
              <span>{props.label}</span>
          </Link>
      )}
      {props.path != 'barbearias' && (
          // <Link to={props.path}>
              <span onClick={handleNoPage}>{props.label}</span>
          // </Link>
      )}
    </li>
  )
}

export default MenuItem