import React from 'react';

const CartCountStepper = ({quantity, increase, decrease}) => {
    
    return (
        <div className="button secondary button-add-item--wrapper">
            <button className="button secondary button-add-item"
            onClick={decrease}>-</button>
            <span className="item-count">
                {quantity}
            </span>
            <button className="button secondary button-add-item"
            onClick={increase}>+</button>
        </div>
    )
}

export default CartCountStepper;