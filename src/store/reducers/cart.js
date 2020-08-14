import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    {...action.item }
                ]
            };

        case actionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                items: [
                    ...state.items.filter(i => i.id !== action.itemId)
                ]
            };

        case actionTypes.UPDATE_CART_ITEM:
            return {
                ...state,
                items: [
                    ...state.items.map(i => i.id === action.item.id ? action.item : i)
                ]
            };

        case actionTypes.CALCULATE_SUB_TOTAL:
            return {
                ...state,
                subTotal: state.items.reduce((total, item) => {
                    return total + (item.price * item.quantity)
                }, 0)
            };

        case actionTypes.SET_GRAND_TOTAL:
            return {
                ...state,
                grandTotal: action.total
            };

        case actionTypes.RESET_CART:
            return {
                ...initialState.cart
            };

        default:
            return state;
    }
};