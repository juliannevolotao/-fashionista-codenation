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

export default function Cart({
  callbackApp,
  animation,
  cartItems,
  visible = false,
}) {
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

          {cartItems ? (
            <div className="cart__body ">
              <div className="cart__item">
                <div className="cart__item">
                  {/* Foto do produto */}
                  <div className="item__image"></div>

                  {/* Informações do produto */}
                  <div className="item__infos">
                    <div className="item__name">
                      <h3>Vestido Transpasse Bow</h3>
                      <span> 20002570</span>
                    </div>

                    <div className="item__price">
                      <p> Tamanho: M</p>
                      <span> R$ 199,00 </span>
                    </div>

                    <div className="item__actions">
                      <div className="action__amount">
                        <button>
                          {" "}
                          <FiMinus size={15} />{" "}
                        </button>
                        <span> 1 </span>
                        <button>
                          {" "}
                          <FiPlus size={15} />{" "}
                        </button>
                      </div>

                      <button className="action__delete">
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
