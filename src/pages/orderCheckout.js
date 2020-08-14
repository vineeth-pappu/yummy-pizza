import React, { useEffect, useState } from 'react';

import OrderSummary from '../containers/orderSummary';
import DeliveryDetails from '../containers/deliveryDetails';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CurrencySwitcher from '../containers/currencySwitcher';
import { createOrder } from '../services/order';
import { toggleLoader } from '../store/actions';

const OrderCheckout = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    
    const cart = useSelector(state => state.cart);
    const userDetails = useSelector(state => state.userDetails);
    
    const [showError, setShowError] = useState(false);
    
    useEffect(() => {
        const valid = userDetails.name && userDetails.email && userDetails.address
        setShowError(!valid)
    }, [userDetails])
    
    const placeOrder = async () => {
        console.log('place order', {cart, userDetails});
        const req = {
            items: cart.items,
            deliveryCharge: cart.deliveryCharge,
            subTotal: cart.subTotal,
            grandTotal: cart.grandTotal,
            name: userDetails.name,
            email: userDetails.email,
            address: userDetails.address,
            currencyId: 1
        }
        
        dispatch(toggleLoader(true));
        
        const result = await createOrder(req)
        
        if (result) {
            console.log('result', result);
            dispatch(toggleLoader(false));
        } else {
            console.log('result', result);
        }
        
        history.push('/order-confirmation')
    }
    
    return (
        <>
            <div className="toolbar">
                <Link to="/">Back</Link>
                <CurrencySwitcher />
            </div>
            
            <OrderSummary />
            
            <DeliveryDetails showError={showError} />
            
            <button className={`button place-order-button ${showError ? 'disabled': ''}`} 
                onClick={placeOrder}>
                Place Order
            </button>            
        </>
    )
}

export default OrderCheckout;