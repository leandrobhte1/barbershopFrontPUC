import SetaDireita from '../images/setaDireita.png'

const Vantagens = () => {
    return (
        <div className="vantagens">
            <h1 className='poppins'>Confira algumas vantagens</h1>
            <div className="collumns">
                <div className="firstCollumn">
                    <span className='poppins f18px mb20'>Inúmeras barbearias</span>
                    <p  className='poppins'>Você pode escolher mais de 1500 barbearias, com certeza tem uma feita para você!</p>
                    <div className="moreInfoDiv">
                        <span className='moreInfo poppins'>Mais info</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                    </div>
                </div>
                <div className="secondCollumn">
                    <span className='poppins f18px mb20'>Gerencie sua agenda</span>
                    <p  className='poppins'>Você tem acesso a uma agenda com seus horários marcados! Fique de olho em seus compromissos!</p>
                    <div className="moreInfoDiv">
                        <span className='moreInfo poppins'>Mais info</span>
                        <img className='setaMoreInfo' src={SetaDireita} alt="Mais info" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vantagens