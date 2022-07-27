import CarrouselProfissionais from "./CarrouselProfissionais";
import { useBarberHomeContext } from '../hooks/useBarberHomeContext'

const EscolhaProfissional = (props) => {

    const { barberHome, dispatchBarberHome } = useBarberHomeContext();

    return(
        <div className="EscolhaProfissional">
            <CarrouselProfissionais showAgendar={true} funcionarios={barberHome.funcionarios}></CarrouselProfissionais>
        </div>
        
    )

}

export default EscolhaProfissional;