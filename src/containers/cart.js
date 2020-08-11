import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    
    const history = useHistory();
    
    const cart = useSelector(state => state.products);
    
    const [expandCart, setExpandCart] = useState(false);
    
    const gotToCheckout = () => {
        history.push("/checkout");
    }
    
    return (
        <>
        <section className="cart-wrapper">
            <div className="view-cart-button" onClick={() => setExpandCart(!expandCart)}>
                {/* <button className="button secondary">view cart</button> */}
                View Cart (5 items)
            </div>
            <div className="checkout-wrapper">
                <div className="checkout-amout">
                    Subtotal: 100
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
                    cart && cart.map((p,i) => (
                        <div className="cart-item" key={i}>
                            <span>{p.name}</span>
                            <span>x 2</span>
                            <span>USD 10.05</span>
                        </div>
                    ))
                }
                
            </div>
        </section>
        </>
    )
}

export default Cart