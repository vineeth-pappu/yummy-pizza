import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, updateCartItem, removeCartItem } from '../store/actions';
import CartCountStepper from '../components/cartCountStepper';

const ProductItem = ({product}) => {
    
    const dispatch = useDispatch();
    
    const {name, description, price, currency, id, image} = product
    
    const itemIndexInCart = useSelector(state => state.cart.items.findIndex(i => i.id === id));
    
    const itemInCart = useSelector(state => state.cart.items[itemIndexInCart]);
    
    const addItem = item => {
        dispatch(addCartItem({...item, quantity: 1}));
    }
    
    const decrementCartItemQty = () => {
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
    
    const incrementCartItemQty = () => {
        const item = {
            ...itemInCart,
            quantity: itemInCart.quantity + 1
        }
        dispatch(updateCartItem(item, itemIndexInCart))
    }
    
    return (
        <div className="product-item">
            <div className="product-item--image">
                <img src={image} alt=""/>
            </div>
            <div className="product-item--details">
                <div className="product-item__name">
                    {name}
                </div>
                <div className="product-item__price"> {currency.code} {price}</div>
                <div className="product-item__desc">
                    {description}
                </div>
            </div>
            <div className="product-item--add-to-cart">
                {
                    !itemInCart
                    ? <button className="button secondary button-add-to-cart" 
                        onClick={()=>addItem(product)}>Add</button>
                    : <CartCountStepper quantity={itemInCart.quantity} 
                        increase={incrementCartItemQty} 
                        decrease={decrementCartItemQty} />
                }
            </div>
        </div>
    )
}

export default ProductItem;