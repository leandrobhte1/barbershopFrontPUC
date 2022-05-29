import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

const handleSubmit = (e) => {
    e.preventDefault();
    toast.info('Funcionalidade ainda não implementada! Será entregue na etapa 3!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

const Reports = () => {

    const [unidade, setUnidade] = useState("");
    const [tipoRelatorio, setTipoRelatorio] = useState("");
    const [download, setDownload] = useState("");
    const [tempo, setTempo] = useState("");

    return (
        <div className="relatorios">
            <div className="relatorios">
                <h1 className="tittleRelatorios poppins">Relatórios</h1>
                <form onSubmit={handleSubmit}>
                    {/* <div className="unidadeSection">
                        <h3 className="itemTittle poppins">Unidade</h3>
                        <select className='selectUnidade poppins' name="unidade" value={unidade} onChange={ (e) => setUnidade(e.target.value)}>
                            <option className='poppins' value="valor1" defaultValue>Escolha uma unidade</option>
                            <option className='poppins' value="valor1">Valor 1</option>
                            <option className='poppins' value="valor2">Valor 2</option>
                            <option className='poppins' value="valor3">Valor 3</option>
                        </select>
                    </div> */}
                    <div className="tipoRelatorioSection">
                        <h3 className="itemTittle poppins">Tipo de relatório</h3>
                        <select className='selectTipoRelatorio poppins' name="tipoRelatorio" value={tipoRelatorio} onChange={ (e) => setTipoRelatorio(e.target.value)}>
                            <option className='poppins' value="valor1" defaultValue>Escolha um tipo de relatório</option>
                            <option className='poppins' value="valor1">Valor 1</option>
                            <option className='poppins' value="valor2">Valor 2</option>
                            <option className='poppins' value="valor3">Valor 3</option>
                        </select>
                    </div>
                    <div className="formatoDownloadSection">
                        <h3 className="itemTittle poppins">Extensão do arquivo:</h3>
                        <div className="optionsFormatoDowload">
                            <div className="option option1">
                                <input type="radio" id="pdf" value="PDF" name="download" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="pdf">PDF</label>
                            </div>
                            <div className="option option2">
                                <input type="radio" id="excel" name="download" value="Excel" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="excel">Excel</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="word" name="download" value="Word" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="word">Word</label>
                            </div>
                        </div>
                    </div>
                    <div className="filtroTempoSection">
                        <h3 className="itemTittle poppins">Filtro de tempo</h3>
                        <div className="optionsFiltroTempo">
                            <div className="option option1">
                                <input type="radio" id="seteDias" name="tempo" value="Últimos 7 Dias" onChange={(e) => setTempo(e.target.value)}></input>
                                <label htmlFor="seteDias">Últimos 7 Dias</label>
                            </div>
                            <div className="option option2">
                                <input type="radio" id="lastMonth" name="tempo" value="Último mês" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="lastMonth">Último mês</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="last3Months" name="tempo" value="Últimos 3 meses" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="last3Months">Últimos 3 meses</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="anual" name="tempo" value="Anual" onChange={(e) => setDownload(e.target.value)}></input>
                                <label htmlFor="anual">Anual</label>
                            </div>
                        </div>
                    </div>
                    <div className="baixarRelatorioBT">
                        <button type='submit' className='poppins'>BAIXAR RELATÓRIO</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reports