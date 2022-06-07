import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useResultSearchContext } from '../hooks/useResultSearchContext'

const MenuItem = (props) => {
  const navigate = useNavigate()
  const { result, dispatchResult } = useResultSearchContext();

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://192.168.18.40:8080/api/empresas/search?searchTerm=`, {
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
          <Link to={props.path}>
              <span>{props.label}</span>
          </Link>
      )}
    </li>
  )
}

export default MenuItem