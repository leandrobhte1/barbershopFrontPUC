import SetaDireita from '../images/setaDireita.png'
import Galeria1 from '../images/galeria1.png'
import Galeria2 from '../images/galeria2.png'
import Galeria3 from '../images/galeria3.png'

const Galeria = () => {
    return (
        <div className="galeriaHome">
            <div className="leftGaleria">
                <h4 className="section_page poppins">MIDIA</h4>
                <h1 className="title_home poppins">Veja nossa galeria</h1>
                <span className='text_contentHome poppins'>Veja algumas fotos enviadas por nossos clientes!</span>
                <div className="moreInfoDiv mt50">
                    <a href="">
                        <span className='moreInfo poppins'>Ver galeria</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Ver galeria" />
                    </a>
                </div>
            </div>
            <div className="rightGaleria">
                <div className="galeria_img1">
                    <img id="galeria1" src={Galeria1} alt="Galeria" />
                </div>
                <div className="galeria_img2">
                    <img id="galeria2" src={Galeria2} alt="Galeria" />
                </div>
                <div className="galeria_img3">
                    <img id="galeria3" src={Galeria3} alt="Galeria" />
                </div>
            </div>
        </div>
    )
}

export default Galeria