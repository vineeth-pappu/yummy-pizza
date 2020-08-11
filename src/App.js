import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/header'
import ProductList from './containers/productList';
import Cart from './containers/cart';

function App() {
  return (
    <div className="App">
      <Header />
      
      <ProductList />
      <Cart />
      <main>
            {/* <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order-confirmation" component={OrderConfirmation} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter> */}

      </main>
    </div>
  );
}

export default App;
