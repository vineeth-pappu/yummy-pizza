import React from 'react';

import Cart from '../containers/cart';
import OrderSummary from '../containers/orderSummary';
import DeliveryDetails from '../containers/deliveryDetails';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderCheckout = () => {
    
    const cart = useSelector(state => state.cart);
    const userDetails = useSelector(state => state.userDetails);
    
    const placeOrder = () => {
        console.log('place order', {cart, userDetails});
        
        
    }
    
    return (
        <>
            <Link to="/">Back</Link>
            <br />
            <br />
            <OrderSummary />
            <br />
            <DeliveryDetails />
            <br />
            <br />
            <button className="button" onClick={placeOrder}>
                Place Order
            </button>            
        </>
    )
}

export default OrderCheckout;