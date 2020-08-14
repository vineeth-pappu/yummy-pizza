import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.currency, action) => {
    switch (action.type) {
        case actionTypes.SET_CHECKOUT_CURRENCY:
            return {
                ...state,
                selectedCurrency: {...action.currency }
            };

        default:
            return state;
    }
};