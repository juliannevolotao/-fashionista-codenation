import React from 'react';

import { Link } from 'react-router-dom';

import './styles.sass';

export default function Index () {

    return (
        <>
          <div className="items">
            <h4> Todas as peças </h4>

            <div className="items__list">

              <Link className="item__list" to="/produto/1">
                <div className="item__image">
                  <div className="item__promo"> 50% OFF </div>
                  <img src={''} alt={''} />

                </div>
                <div className="item__text">
                  <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
                  <div className="item__discount">
                    <span className="item__price"> R$ 139,90 </span>
                    <span className="discount__price"> R$ 69,90 </span>
                  </div>
                </div>
              </Link>

              <Link className="item__list" to="/produto/2">
              <div className="item__image">
                <img src={''} alt={''} />

                </div>
                <div className="item__text">
                  <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
                  <span className="item__price"> R$ 199,90 </span>
                </div>
              </Link>

              <Link className="item__list" to="/produto/2">
              <div className="item__image">
                <img src={''} alt={''} />

                </div>
                <div className="item__text">
                  <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
                  <span className="item__price"> R$ 199,90 </span>
                </div>
              </Link>

              <Link className="item__list" to="/produto/2">
              <div className="item__image">
                <img src={''} alt={''} />

                </div>
                <div className="item__text">
                  <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
                  <span className="item__price"> R$ 199,90 </span>
                </div>
              </Link>

              <Link className="item__list" to="/produto/2">
              <div className="item__image">
                <img src={''} alt={''} />

                </div>
                <div className="item__text">
                  <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
                  <span className="item__price"> R$ 199,90 </span>
                </div>
              </Link>

            </div>
          </div>

        </>
    )
    
}