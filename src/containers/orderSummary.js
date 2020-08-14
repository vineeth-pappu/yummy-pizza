import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from './productItem'
import CartCountStepper from '../components/cartCountStepper';
import { removeCartItem, updateCartItem } from '../store/actions';

const OrderSummary = () => {
  
    const dispatch = useDispatch();
    
    const history = useHistory();
    
    
    const cart = useSelector(state => state.cart);
    
    const removeItem = itemId => {
        dispatch(removeCartItem(itemId))
    }
    
    const decrementCartItemQty = (itemInCart, itemIndexInCart) => {
        const item = {
            ...itemInCart,
            quantity: itemInCart.quantity - 1
        }
        
        if (item.quantity == 0) {
            dispatch(removeCartItem(item.id))
        } else {
            dispatch(updateCartItem(item))
        }
    }
    
    const incrementCartItemQty = (itemInCart, itemIndexInCart) => {
        const item = {
            ...itemInCart,
            quantity: itemInCart.quantity + 1
        }
        dispatch(updateCartItem(item, itemIndexInCart))
    }
    
    if (!cart.items.length) {
        history.push("/");
    }
    
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            
            <div className="order-details">
                {
                    cart.items.map((i,idx) => (
                        <div className="cart-item" key={idx}>
                            <span>{i.name}</span>
                            <span>x {i.quantity}</span>
                            <span>
                                <CartCountStepper quantity={i.quantity} 
                                    increase={() => incrementCartItemQty(i, idx)} 
                                    decrease={() => decrementCartItemQty(i, idx)} />
                            </span>
                            <span>USD {i.price * i.quantity}</span>
                        </div>
                    ))
                }
            </div>
            <div className="order-amount">
                <div className="amount-details">
                    <span>Sub Total</span>
                    <span> { cart.subTotal } </span>
                </div>
                <div className="amount-details">
                    <span>Delivery Charges</span>
                    <span> { cart.deliveryCharge } </span>
                </div>
                <div className="amount-details">
                    <span>Grand Total</span>
                    <span> { cart.subTotal + cart.deliveryCharge } </span>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;