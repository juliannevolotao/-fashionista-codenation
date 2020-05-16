import React from 'react';

import './styles.sass';

import { FiShoppingBag, FiHeart, FiSearch } from 'react-icons/fi';

export default function Menu(props){


    return (
        <div className="menu">
            <div className="menu__container">
                <button className="menu__logo" >
                    BeYou 
                    <FiHeart size={22} className="logo__icon"/>
                </button>

                <div className="menu__buttons">
                    <FiSearch size={24} className="button__icon"/>
                    <FiShoppingBag size={24} className="button__icon" onClick={props.callbackApp}/>
                </div>
            </div>
        </div>
    )
    
}