import SetaDireita from '../images/setaDireita.png'
import Galeria1 from '../images/galeria1.png'
import Galeria2 from '../images/galeria2.png'
import Galeria3 from '../images/galeria3.png'
import { ToastContainer, toast } from 'react-toastify';

const Galeria = () => {

    const handleMoreInfo = (e) => {
        toast.info('Tela não existe! Não era requisito ter todas as telas do sistema completo!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="galeriaHome">
            <div className="leftGaleria">
                <h4 className="section_page poppins">MIDIA</h4>
                <h1 className="title_home poppins">Veja nossa galeria</h1>
                <span className='text_contentHome poppins'>Veja algumas fotos enviadas por nossos clientes!</span>
                <div className="moreInfoDiv mt50">
                    <span className='moreInfo poppins' onClick={handleMoreInfo}>Ver galeria</span>
                    <img className='setaMoreInfo' src={SetaDireita} alt="Ver galeria" />
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