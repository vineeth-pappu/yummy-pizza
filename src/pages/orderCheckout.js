import React, { useEffect, useState } from 'react';

import Cart from '../containers/cart';
import OrderSummary from '../containers/orderSummary';
import DeliveryDetails from '../containers/deliveryDetails';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderCheckout = () => {
    
    const history = useHistory();
    
    const cart = useSelector(state => state.cart);
    const userDetails = useSelector(state => state.userDetails);
    
    const [showError, setShowError] = useState(false);
    
    useEffect(() => {
        const valid = userDetails.name && userDetails.email && userDetails.address
        setShowError(!valid)
    }, [userDetails])
    
    const placeOrder = () => {
        console.log('place order', {cart, userDetails});
        history.push('/order-confirmation')
        
    }
    
    return (
        <>
            <Link to="/">Back</Link>
            <br />
            <br />
            <OrderSummary />
            <br />
            <DeliveryDetails showError={showError} />
            <br />
            <br />
            <button className={`button place-order-button ${showError ? 'disabled': ''}`} 
            onClick={placeOrder}>
                Place Order
            </button>            
        </>
    )
}

export default OrderCheckout;