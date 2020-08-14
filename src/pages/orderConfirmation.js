import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../store/actions';

const OrderConfirmation = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const gotToHome = () => {
        dispatch(resetCart());
        history.push('/')
    }
    
    return (
        <div className="order-success">
            <h3>Order Confirmed</h3>
            <br />
            <p>Order is placed successfully</p>
            <br /><br /><br />
            <button className="button" onClick={gotToHome}>
                Go to Home
            </button>
        </div>
    )
}

export default OrderConfirmation;