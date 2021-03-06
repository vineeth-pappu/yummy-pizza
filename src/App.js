import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './AppResponsive.css'

import Header from './components/header'
import Home from './pages/home';
import OrderCheckout from './pages/orderCheckout';
import OrderConfirmation from './pages/orderConfirmation';
import Loader from './containers/loader';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Loader />
      
      <main>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={OrderCheckout} />
                <Route exact path="/order-confirmation" component={OrderConfirmation} />
                <Route component={Home} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
