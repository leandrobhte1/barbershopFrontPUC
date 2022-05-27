import logo from '../images/logo.png'
import TopMenu from './TopMenu'
import MenuUser from './MenuUser'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main-header'>
            <Link className='logo col-md-4' to='/'>
              <img className="logoBarberShop" src={logo} alt="Logo"></img>
            </Link>
            <TopMenu></TopMenu>
            <MenuUser></MenuUser>
        </header>
  )
}

export default Header