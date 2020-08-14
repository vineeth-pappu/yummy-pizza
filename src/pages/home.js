import React from 'react';

import ProductList from '../containers/productList';
import Cart from '../containers/cart';

const Home = () => {
    return (
        <>
            <ProductList />
            <Cart />
        </>
    )
}

export default Home;