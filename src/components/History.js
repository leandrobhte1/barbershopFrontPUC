import LineHistorico from "./LineHistorico"

const History = () => {

    let fakeHistory = [{id: 1, client: 'Leandro Oliveira', avaliado: true, nota: 5, service: 'Corte de cabelo', date: "22/01/2022", hour: "12:15", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 2, client: 'Leandro Oliveira', avaliado: false, nota: 0, service: 'Corte de cabelo', date: "22/01/2022", hour: "11:45", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 3, client: 'Matheus Pereira', avaliado: false, nota: 0, service: 'Corte de cabelo', date: "18/01/2022", hour: "16:30", barberShop: "Barbearia Almeida", professional: 'Isaque Almeida', status: 'OK', reason:''},
                       {id: 4, client: 'Claudia Ramos', avaliado: true, nota: 4, service: 'Pintura de unha', date: "07/01/2022", hour: "10:00", barberShop: "Barbearia Almeida", professional: 'Isabelle Oliveira', status: 'OK', reason:''},
                       {id: 5, client: 'Claudia Ramos', avaliado: true, nota: 2, service: 'Pintura de unha', date: "27/12/2021", hour: "18:45", barberShop: "Barbearia Almeida", professional: 'Isabelle Oliveira', status: 'NOK', reason:'Não compareceu'},
                       {id: 6, client: 'Leandro Oliveira', avaliado: false, nota: 5, service: 'Corte de cabelo', date: "18/12/2021", hour: "11:30", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 7, client: 'Leandro Oliveira', avaliado: true, nota: 4, service: 'Corte de cabelo', date: "13/12/2021", hour: "08:00", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'NOK', reason:'Desmarcado'},
                       {id: 8, client: 'Joao Gomes', avaliado: false, nota: 0, service: 'Corte de cabelo', date: "01/12/2021", hour: "09:45", barberShop: "Barbearia Almeida", professional: 'Rodrigo Oliveira', status: 'OK', reason:''},
                       {id: 9, client: 'Vitor Gonçalves', avaliado: false, nota: 0, service: 'Corte de cabelo', date: "23/11/2021", hour: "12:30", barberShop: "Barbearia Almeida", professional: 'Rogerio Silva', status: 'OK', reason:''},
                       {id: 10, client: 'Guilherme Costa', avaliado: true, nota: 1, service: 'Corte de cabelo', date: "14/11/2021", hour: "07:30", barberShop: "Barbearia Almeida", professional: 'Ricardo Camillo', status: 'NOK', reason:'Desmarcado'}
    ]


    return (
        <div className="historico">
            <h1 className="tittleHistorico poppins">Histórico de atendimentos:</h1>
            <span className="obs">Dados ainda mockados nessa tela pois funcionalidades de agendamento, histórico e relatórios serão entregues na etapa 3! Na etapa 2 foram entregues as funcionalidades de crud de usuários, crud de empresa, adicionar funcionário na empresa e busca de empresas através da home no campo de pesquisa</span>
            <div className="titleSectionHistorico">
                <h3 className="subtittle dateHour">Data e Hora</h3>
                <div className="lineBetween"></div>
                <h3 className="subtittle">Serviço</h3>
            </div>
            <div className="infoHistorico">
                {fakeHistory.map( (history) => 
                    <div key={history.id}>
                        <LineHistorico service={history.service} avaliado={history.avaliado} nota={history.nota} date={history.date} hour={history.hour} barberShop={history.barberShop}  professional={history.professional} status={history.status} reason={history.reason} ></LineHistorico>
                    </div>)
                }
            </div>
        </div>
    )
}

export default History