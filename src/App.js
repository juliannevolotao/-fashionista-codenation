import React, { useState, useEffect } from "react";
import Routes from "./routes";

import "./StylesGlobal/global.sass";

import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Container from "./Components/PageContainer";
import Cart from "./Components/Cart";

import animationData from "./assets/lotties/cart.json";

import { BrowserRouter } from "react-router-dom";
import { doGetRequest } from "./Helpers/apiHelper";

import { Provider } from "react-redux";
import store from './Store';


export default function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
  }, []);

  const onCartButtonOpen = () => {
    setCartOpen(!isCartOpen);
  };

  const onCartButtonClose = () => {
    setCartOpen(!isCartOpen);
  };



  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Cart
            animation={animationData}
            visible={isCartOpen}
            callbackApp={() => onCartButtonClose()}
          />

          <Menu callbackApp={() => onCartButtonOpen()} />
          <Container>
            <Routes />
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}
