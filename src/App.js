import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/LogIn";
import Signup from "./components/signUp";
import Navbar from "./components/navbar";
import Products from "./components/Products";
import Profile from "./components/profile";
import ShopCarts from "./components/ShopCarts";
import ProductDetails from "./components/ProductDetails";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import "./App.scss";

function App() {
  return (
    <div className="Home">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products" component={Products} />
              <Route path="/profile" component={Profile} />
              <Route path="/shopCarts" component={ShopCarts} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
