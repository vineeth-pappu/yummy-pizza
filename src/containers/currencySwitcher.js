import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCurrency } from '../store/actions';

const CurrencySwitcher = ({showError}) => {
    
    const dispatch = useDispatch();
    
    const selectedCurrency = useSelector(state => state.currency.selectedCurrency);
    const avilableCurrencies = useSelector(state => state.currency.avilableCurrencies);
    
    const setCurrency = ({target}) => {
        const {value} = target
        const currency = JSON.parse(value)
        dispatch(setSelectedCurrency(currency))
    }
    
    return (
        <div className="form-control">
            <label htmlFor="currency">Currency</label>
            <select name="currency" id="currency"
                value={JSON.stringify(selectedCurrency)}
                onChange={setCurrency}>
                {
                    avilableCurrencies && avilableCurrencies.map((c, i) => (
                        <option key={i} value={JSON.stringify(c)} >{c.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CurrencySwitcher;