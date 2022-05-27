import { Link } from 'react-router-dom'

const MenuItem = (props) => {
  return (
    <li>
        <Link to={props.path}>
            <span>{props.label}</span>
        </Link>
    </li>
  )
}

export default MenuItem