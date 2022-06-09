import { useTabHomeSelectedContext } from '../hooks/useTabHomeSelectedContext'
import CarrouselBestBarberShops from './CarrouselBestBarberShops';
import CarrouselBestBarberShops2 from './CarrouselBestBarberShops2';
import CarrouselBestBarberShops3 from './CarrouselBestBarberShops3';

const BestBarberShops = () => {

    const { tab, dispatch } = useTabHomeSelectedContext();

    return (
        <div className="bestBarberShops">
            <h2 className="tittle poppins">Melhores barbearias</h2>
            <div className="listFilter">
                <ul className="tabListFilter">
                    <li className={`tabListFilterItem poppins ${tab == 1 ? 'selected' : ''}`} onClick={ () => dispatch({type: "TAB_CHANGED", payload: 1})}>Nota</li>
                    <li className={`tabListFilterItem poppins ${tab == 2 ? 'selected' : ''}`} onClick={ () => dispatch({type: "TAB_CHANGED", payload: 2})}>Preço</li>
                    <li className={`tabListFilterItem poppins ${tab == 3 ? 'selected' : ''}`} onClick={ () => dispatch({type: "TAB_CHANGED", payload: 3})}>Proximidade</li>
                </ul>
            </div>
            <div className={`contentTab contentTab1 ${tab == 1 ? 'd-flex' : 'd-none'}`}>
                <CarrouselBestBarberShops></CarrouselBestBarberShops>
            </div>
            <div className={`contentTab contentTab2 ${tab == 2 ? 'd-flex' : 'd-none'}`}>
                <CarrouselBestBarberShops></CarrouselBestBarberShops>
            </div>
            <div className={`contentTab contentTab1 ${tab == 3 ? 'd-flex' : 'd-none'}`}>
                <CarrouselBestBarberShops></CarrouselBestBarberShops>
            </div>
        </div>
    )
}

export default BestBarberShops