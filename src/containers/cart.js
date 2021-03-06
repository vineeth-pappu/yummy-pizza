import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubTotal, removeCartItem, updateCartItem } from '../store/actions';
import CartItem from '../components/cartItem';

const Cart = () => {
    
    const dispatch = useDispatch();
    
    const history = useHistory();
    
    const cart = useSelector(state => state.cart);
    
    const [expandCart, setExpandCart] = useState(true);
    
    useEffect(() => {
        dispatch(calculateSubTotal())
    }, [cart.items, dispatch])
    
    const gotToCheckout = () => {
        history.push("/checkout");
    }
    
    const decrementCartItemQty = (itemInCart, itemIndexInCart) => {
        const item = {
            ...itemInCart,
            quantity: itemInCart.quantity - 1
        }
        
        if (item.quantity === 0) {
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
    
    if (cart.items.length <= 0) {
        return null
    }
    
    return (
        <>
        <section className="cart-wrapper">
            <div className="view-cart-button" onClick={() => setExpandCart(!expandCart)}>
                <button className="expand-cart-btn">
                    {expandCart? ' - ' : ' + '}
                </button>
                Cart ({cart.items.length} items)
            </div>
            <div className="checkout-wrapper">
                <div className="checkout-amout">
                    Subtotal: ${cart.subTotal}
                </div>
                <div className="checkout-button">
                    <button className="button" onClick={() => gotToCheckout()}>Continue</button>
                </div>
            </div>
        </section>
        
        <section className={ 'modal cart-modal' + (expandCart ? ' expanded' : '')}>
            <div className="modal-header">
                <h4>Your Orders</h4>
                <span className="modal-close-btn" onClick={()=> setExpandCart(false)}>close</span>
            </div>
            <div className="modal-body">
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
        </section>
        <div className={ 'modal-backdrop' + (expandCart ? ' show' : '')}
            onClick={()=> setExpandCart(false)}></div>
        </>
    )
}

export default Cart