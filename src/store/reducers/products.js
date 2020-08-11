import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.products, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return [
                ...action.products
            ];

        default:
            return state;
    }
};