import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import userDetails from './userDetails';
import currency from './currency';
import loading from './loading';

export default combineReducers({
    products,
    cart,
    userDetails,
    currency,
    loading
});