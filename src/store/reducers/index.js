import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import userDetails from './userDetails';
import currency from './currency';

export default combineReducers({
    products,
    cart,
    userDetails,
    currency
});