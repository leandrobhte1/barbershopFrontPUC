import ReactStars from "react-rating-stars-component";
import BarbeariaRibeiro from '../images/barbeariaRibeiro.png'
import { ToastContainer, toast } from 'react-toastify';

const Avaliacao = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info('Funcionalidade ainda não implementada!', {
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
        <div className="avaliacao">
            <h1 className="tittleSection poppins">Avaliação de serviço:</h1>
            <form onSubmit={handleSubmit}>
                <div className="infoBarberShop">
                    <span className="nameBarberShop poppins">Barbearia Ribeiro</span>
                    <img className='logoBarberShop' src={BarbeariaRibeiro} alt="Logo BarberShop" />
                </div>
                <div className="question">
                    <span className="tittleQuestion poppins">Dê uma nota de 1 a 5 estrelas:</span>
                    <div className="stars">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={1}
                        classNames="react-stars-avaliation"
                        edit={true}
                    />
                    </div>
                </div>
                <div className="question">
                    <span className="tittleAvaliacao poppins">Dê um título para sua avaliação</span>
                    <input type="text" className="avaliacaoTitulo" placeholder="Dê um título para sua avaliação" />
                </div>
                <div className="question">
                    <div className="text">
                        <span className="tittleAvaliacao poppins">Dê uma descrição para sua avaliação</span>
                        <span className="opcional">* Opcional</span>
                    </div>
                    <textarea className="avaliacaoTextArea" name="avaliacao" id="avaliacao" cols="30" rows="10" placeholder="Dê uma descrição para sua avaliação"></textarea>
                </div>
                <div className="avaliarServico">
                    <button type='submit' className='avaliarServicoBT lato'>AVALIAR SERVIÇO</button>
                </div>
            </form>
        </div>
    )
}

export default Avaliacao