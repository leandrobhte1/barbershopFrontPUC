import React from 'react'
import Logo from '../images/logo.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="left">
            <img className='logoFooter' src={Logo} alt="Logo" />
            <div className="textFooter">
                <h3 className='barberShopNameFooter tittleLogoFooter poppins'>Barber Shop</h3>
                <h5 className='barberShopNameFooter subtittleLogoFooter subTextLogoFooter poppins'>A comôdidade ao seu lado!</h5>
                <span className='poppins copyright'>Copyright &copy; 2022</span>
            </div>
        </div>
        <div className="right">
            <div className="collumn collumn1">
                <span className="titleCollumnFooter orangeText poppins">Serviços</span>
                <span className="optionCollumnFooter poppins">Corte de cabelo</span>
                <span className="optionCollumnFooter poppins">Barba</span>
                <span className="optionCollumnFooter poppins">Relaxamento</span>
            </div>
            <div className="collumn collumn2">
                <span className="titleCollumnFooter orangeText poppins">Perfis</span>
                <span className="optionCollumnFooter poppins">Cliente</span>
                <span className="optionCollumnFooter poppins">Funcionários</span>
                <span className="optionCollumnFooter poppins">Administrador</span>
            </div>
            <div className="collumn collumn3">
                <span className="titleCollumnFooter orangeText poppins">Siga-nos</span>
                <div className="facebook">
                    <img id='facebook' src={Facebook} alt="Facebook" />
                    <span className="optionCollumnFooter poppins">Facebook</span>
                </div>
                <div className="twitter">
                    <img id='twitter' src={Twitter} alt="Twitter" />
                    <span className="optionCollumnFooter poppins">Twitter</span>
                </div>
                <div className="instagram">
                    <img id='instagram' src={Instagram} alt="Instagram" />
                    <span className="optionCollumnFooter poppins">Instagram</span>
                </div>
                <div className="terms">
                    <span className='poppins'><a href="#">Terms & Conditions</a></span>
                    <span className='poppins'><a href="#">Privacy Policy</a></span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer