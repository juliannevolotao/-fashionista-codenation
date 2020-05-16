import React, {useState} from 'react';

import './styles.sass';

import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';


export default function Cart(props) {

    return (
        <div className="cart" >
            <button className="cart__fade" onClick={props.callbackApp}>  </button>

            <div className="cart__content">
                <div className="cart__header">
                    <button onClick={props.callbackApp} > <FiArrowLeft size={26} /></button>
                    <p> Minha Sacola </p>
                </div>

                <div className="cart__body">

                </div>
                
                <div className="cart__footer">
                    <div className="cart__subtotal">
                        <p> Sub-Total:  <span> R$600,00</span> </p>
                    </div>
                    <button className="cart__finish">
                        Finalizar Compra
                        <FiCheckCircle size={24} className="cart__check"/>
                    </button>
                </div>

            </div>
            
        </div>
    )
}