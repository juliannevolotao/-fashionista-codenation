import React from 'react';

import './styles.sass';

import { FiShoppingBag, FiHeart, FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logoBeYou.svg';


class Menu extends React.Component{

    render() {
        return (
            <div className="menu">
                <div className="menu__container">
                    <button className="menu__logo">
                        BeYou 
                        <FiHeart size={22} className="logo__icon"/>
                    </button>

                    <div className="menu__buttons">
                        <FiSearch size={24} className="button__icon"/>
                        <FiShoppingBag size={24} className="button__icon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;