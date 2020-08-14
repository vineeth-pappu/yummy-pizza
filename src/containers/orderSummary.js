import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from './productItem'
import CartCountStepper from '../components/cartCountStepper';
import { removeCartItem, updateCartItem, calculateSubTotal } from '../store/actions';
import CartItem from '../components/cartItem';
import { convertUSDtoEURO } from '../helpers/currencyConverter';

const OrderSummary = () => {
  
    const dispatch = useDispatch();
    const history = useHistory();
    
    const cart = useSelector(state => state.cart);
    const selectedCurrency = useSelector(state => state.currency.selectedCurrency);
    
    const [grandTotal, setGrandTotal] = useState(0);
    
    useEffect(() => {
        dispatch(calculateSubTotal())
    }, [cart.items])
    
    useEffect(() => {
        let total = cart.subTotal + cart.deliveryCharge
        if (selectedCurrency.name == 'EURO') {
            total = convertUSDtoEURO(total)
        }
        console.log({total});
        
        setGrandTotal(total);
    }, [selectedCurrency, cart.subTotal])
    
    
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
                        <CartItem key={idx}
                            item={i}
                            itemIndex={idx}
                            incrementCartItemQty={incrementCartItemQty}
                            decrementCartItemQty={decrementCartItemQty} 
                        />
                    ))
                }
            </div>
            <div className="order-amount">
                <div className="amount-details">
                    <span>Sub Total</span>
                    <span>USD { cart.subTotal } </span>
                </div>
                <div className="amount-details">
                    <span>Delivery Charges</span>
                    <span>USD { cart.deliveryCharge } </span>
                </div>
                <div className="amount-details grand-total">
                    <span>Grand Total</span>
                    <span>{selectedCurrency.name} { grandTotal } </span>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;