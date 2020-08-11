import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubTotal, removeCartItem } from '../store/actions';

const Cart = () => {
    
    const dispatch = useDispatch();
    
    const history = useHistory();
    
    const cart = useSelector(state => state.cart);
    
    const [expandCart, setExpandCart] = useState(false);
    
    useEffect(() => {
        dispatch(calculateSubTotal())
    }, [cart.items])
    
    const gotToCheckout = () => {
        history.push("/checkout");
    }
    
    const removeItem = itemId => {
        dispatch(removeCartItem(itemId))
    }
    
    if (cart.items.length <= 0) {
        return null
    }
    
    return (
        <>
        <section className="cart-wrapper">
            <div className="view-cart-button" onClick={() => setExpandCart(!expandCart)}>
                View Cart ({cart.items.length} items)
            </div>
            <div className="checkout-wrapper">
                <div className="checkout-amout">
                    Subtotal: {cart.subTotal}
                </div>
                <div className="checkout-button">
                    <button className="button" onClick={() => gotToCheckout()}>Contine</button>
                </div>
            </div>
        </section>
        <section className={ 'cart-modal' + (expandCart ? ' expanded' : '')}>
            <div className="modal-header">
                <h4>Your Orders</h4>
                <span className="modal-close-btn" onClick={()=> setExpandCart(false)}>close</span>
            </div>
            <div className="modal-body">
                {
                    cart.items.map((i,idx) => (
                        <div className="cart-item" key={idx}>
                            <span>{i.name}</span>
                            <span>x {i.quantity}</span>
                            <span>USD {i.price * i.quantity}</span>
                            <button onClick={()=>removeItem(i.id)}>
                                remove
                            </button>
                        </div>
                    ))
                }
                
            </div>
        </section>
        </>
    )
}

export default Cart