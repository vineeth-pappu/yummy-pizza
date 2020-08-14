import React from 'react';

import Cart from '../containers/cart';
import OrderSummary from '../containers/orderSummary';
import DeliveryDetails from '../containers/deliveryDetails';

const OrderCheckout = () => {
    return (
        <>
            <OrderSummary />
            <br></br>
            <DeliveryDetails />
        </>
    )
}

export default OrderCheckout;