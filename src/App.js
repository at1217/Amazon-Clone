import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import './App.css';
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Orderconfirmation from './OrderConfirmation';
import dotenv from 'dotenv';

dotenv.config();

const promise = loadStripe(`${process.env.STRIPE_API}`);

function App() {

const [{ user }, dispatch] = useStateValue();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch({
        type: "SET_USER",
        user: authUser,
      })
    } else {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });

  return () => {
    unsubscribe();
  }
}, []);

console.log("USER IS >>> ", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orderconfirmation">
            <Header />
            <Orderconfirmation />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>      
    </div>
    </Router>
    
  );
}

export default App;
