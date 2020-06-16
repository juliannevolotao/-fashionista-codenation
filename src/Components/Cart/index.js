import React, { useState } from "react";

import "./styles.sass";

import {
  FiArrowRight,
  FiCheckCircle,
  FiPlus,
  FiMinus,
  FiTrash2,
} from "react-icons/fi";

import Lottie from "react-lottie";

import { connect } from "react-redux";

function Cart({ callbackApp, animation, cartItems, visible = false }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="cart">
      <button
        className={`cart__fade   ${visible ? "fade--active" : "fade--disable"}`}
        onClick={callbackApp}
      >
        {" "}
      </button>

      <div
        className={`cart__container  ${
          visible ? "cart--active" : "cart--disable"
        }`}
      >
        <div className="cart__content">
          <div className="cart__header">
            <button onClick={callbackApp}>
              {" "}
              <FiArrowRight size={26} />
            </button>
            <p> Minha Sacola </p>
          </div>

          {cartItems.length !== 0 ? (
            <div className="cart__body ">
              

                {cartItems.map((item, index) => (
                  <div key={index} className="cart__item">
                    {/* Foto do produto */}
                    <div className="item__image">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>

                    {/* Informações do produto */}
                    <div className="item__infos">
                      <div className="item__name">
                        <h3>{item.product.name}</h3>
                        <span> {item.product.style}</span>
                      </div>

                      <div className="item__price">
                        <p> Tamanho: {item.selectedSize} </p>
                        <span> {item.product.actual_price} </span>
                      </div>

                      <div className="item__actions">
                        <div className="action__amount">
                          <button>
                            <FiMinus size={15} />
                          </button>
                          <span> {item.quantity} </span>
                          <button>
                            <FiPlus size={15} />
                          </button>
                        </div>

                        <button className="action__delete">
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              
            </div>
          ) : (
            <div className="cart__body alignItems">
              <Lottie options={defaultOptions} height={200} width={200} />
            </div>
          )}

          <div className="cart__footer">
            <div className="cart__subtotal">
              <p>
                {" "}
                Sub-Total: <span> R$600,00</span>{" "}
              </p>
            </div>
            <button className="cart__finish">
              Finalizar Compra
              <FiCheckCircle size={24} className="cart__check" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
