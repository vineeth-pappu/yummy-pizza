import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from './productItem'
import { getProducts } from '../services/product';
import { setProducts, toggleLoader } from '../store/actions';

const ProductList = () => {
  
    const dispatch = useDispatch();
    
    const products = useSelector(state => state.products);
    
    useEffect(() => {
        const getAllProducts = async () => {
            dispatch(toggleLoader(true));
            const {data: products} = await getProducts()
            console.log(products);
            
            if (products) {
                dispatch(setProducts(products))
                dispatch(toggleLoader(false));
            }
        }
        
        getAllProducts();
    }, [dispatch])
    
    
    
    return (
        <section className="product-list">
          {
            products && products.map((p, i) => <ProductItem key={i} product={p} />)
          }
        </section>
    )
}

export default ProductList;