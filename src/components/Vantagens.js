import SetaDireita from '../images/setaDireita.png'
import { ToastContainer, toast } from 'react-toastify';

const Vantagens = () => {

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
        <div className="vantagens">
            <h1 className='poppins'>Confira algumas vantagens</h1>
            <div className="collumns">
                <div className="firstCollumn">
                    <span className='poppins f18px mb20'>Inúmeras barbearias</span>
                    <p  className='poppins'>Você pode escolher mais de 1500 barbearias, com certeza tem uma feita para você!</p>
                    <div className="moreInfoDiv">
                        <span className='moreInfo poppins' onClick={handleMoreInfo}>Mais info</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                    </div>
                </div>
                <div className="secondCollumn">
                    <span className='poppins f18px mb20'>Gerencie sua agenda</span>
                    <p  className='poppins'>Você tem acesso a uma agenda com seus horários marcados! Fique de olho em seus compromissos!</p>
                    <div className="moreInfoDiv">
                        <span className='moreInfo poppins' onClick={handleMoreInfo}>Mais info</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vantagens