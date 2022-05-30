import CardHistorico from './CardHistorico'

const LineHistorico = (props) => {
    return (
        <div className="lineHistorico">
            <div className="left">
                <span className="hour lato">{props.hour}</span>
                <span className="date">{props.date}</span>
            </div>
            <div className="right">
                <CardHistorico service={props.service} avaliado={props.avaliado} nota={props.nota} barberShop={props.barberShop}  professional={props.professional} status={props.status} reason={props.reason} ></CardHistorico>
            </div>
        </div>
    )
}

export default LineHistorico