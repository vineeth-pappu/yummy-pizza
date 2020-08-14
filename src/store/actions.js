import * as actionTypes from './actionTypes';

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

export const calculateSubTotal = (item, idx) => {
    return {
        type: actionTypes.CALCULATE_SUB_TOTAL
    };
};

export const updateUserDetails = userDetails => {
    return {
        type: actionTypes.UPDATE_USER_DETAILS,
        userDetails
    };
};