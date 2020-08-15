import * as actionTypes from './actionTypes';

export const toggleLoader = status => {
    return {
        type: actionTypes.TOGGLE_LOADER,
        status,
    };
};

export const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products,
    };
};

export const addCartItem = item => {
    return {
        type: actionTypes.ADD_CART_ITEM,
        item,
    };
};

export const removeCartItem = itemId => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        itemId,
    };
};

export const updateCartItem = (item, idx) => {
    return {
        type: actionTypes.UPDATE_CART_ITEM,
        item,
        idx
    };
};

export const calculateSubTotal = () => {
    return {
        type: actionTypes.CALCULATE_SUB_TOTAL
    };
};

export const setGrandTotal = total => {
    return {
        type: actionTypes.SET_GRAND_TOTAL,
        total
    };
};

export const resetCart = () => {
    return {
        type: actionTypes.RESET_CART
    };
};

export const updateUserDetails = userDetails => {
    return {
        type: actionTypes.UPDATE_USER_DETAILS,
        userDetails
    };
};

export const setSelectedCurrency = currency => {
    return {
        type: actionTypes.SET_CHECKOUT_CURRENCY,
        currency
    };
};

export const setAvailableCurrencies = currencies => {
    return {
        type: actionTypes.SET_AVAILABLE_CURRENCIES,
        currencies
    };
};