import React from 'react';

const ProductItem = props => {
    return (
        <div className="product-item">
            <div className="product-item--image">
                <img src="https://www.freeiconspng.com/uploads/pizza-png-15.png" alt=""/>
            </div>
            <div className="product-item--details">
                <div className="product-item__name">
                    Margherita Pizza
                </div>
                <div className="product-item__price">10</div>
                <div className="product-item__desc">
                    Tomato sauce, mozzarella, fresh basil.
                </div>
            </div>
            <div className="product-item--add-to-cart">
                <button className="button secondary button-add-to-cart">Add</button>
                
                <div className="button secondary button-add-item--wrapper">
                    <button className="button secondary button-add-item">-</button>
                    <span className="item-count">1</span>
                    <button className="button secondary button-add-item">+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;