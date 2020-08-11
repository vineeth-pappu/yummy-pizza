import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from './productItem'

const ProductList = () => {
  
    const dispatch = useDispatch();
    
    const products = useSelector(state => state.products);
    
    return (
        <section className="product-list">
          {
            products && products.map((p, i) => <ProductItem key={i} product={p} />)
          }
        </section>
    )
}

export default ProductList;