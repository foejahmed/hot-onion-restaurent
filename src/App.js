import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import OrderComplete from './components/OrderComplete/OrderComplete';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/place-order">
              <OrderComplete></OrderComplete>
            </Route>
            
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;