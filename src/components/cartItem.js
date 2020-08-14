import React from 'react';

import CartCountStepper from '../components/cartCountStepper';

const CartItem = ({item, itemIndex, incrementCartItemQty, decrementCartItemQty}) => {
    
    return (
        <div className="cart-item">
            <div>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">USD {item.price} </div>
            </div>
            <div>
                <CartCountStepper quantity={item.quantity} 
                    increase={() => incrementCartItemQty(item, itemIndex)} 
                    decrease={() => decrementCartItemQty(item, itemIndex)} />
                <div className="cart-item-total-price">USD {item.price * item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem;