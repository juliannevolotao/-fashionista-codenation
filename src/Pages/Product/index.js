import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { FiArrowLeft, FiShoppingBag, FiX } from "react-icons/fi";

import "./styles.sass";
import noImage from "../../assets/noImage.jpg";

import { connect, useDispatch } from "react-redux";

function Product({ product }) {
  // const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!product?.name) {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <div className="item">
        <Link className="back__button" to={"/"}>
          <FiArrowLeft size="22" />
          <span> Voltar </span>
        </Link>

        <div className="item__content">
          <div className="item__title">
            <h4> {product.name} </h4>
            <span> {product.style} </span>
          </div>

          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="item__image"
            />
          ) : (
            <img src={noImage} alt={"No image"} className="item__image" />
          )}

          <div className="item__info">
            <div className="info__title">
              <h5> {product.name} </h5>
              <span> {product.style} </span>
            </div>

            <div className="info__price">
              <p> {product.actual_price} </p>
              <span> em até {product.installments} sem juros </span>
            </div>

            <div className="info__divider"></div>

            <div className="info__size">
              <div className="size__chosen">
                <p> Tamanho: </p>
                <span> P </span>
              </div>

              <div className="size__options">
                {product.sizes?.map((size) => (
                  <div className={`option__box`}>
                    {size.size}
                    {!size.available && (
                      <FiX className="option__box--disable" />
                    )}
                  </div>
                ))}
                {/* <div className="option__box "> PP </div>
                <div className="option__box option__box--active"> P </div>
                <div className="option__box "> M <FiX className="option__box--disable" /></div>
                <div className="option__box "> G </div>
                <div className="option__box "> GG </div> */}
              </div>
            </div>

            <div className="info__quantity">
              <p>Quantidade:</p>
              <input type="number" defaultValue="1" min="1" max="10" />
            </div>

            <button className="info__add">
              Colocar na sacola
              <FiShoppingBag size="24" className="add__bag" />
            </button>
          </div>
        </div>

        <div className="promo">
          <h4> Novas promoções: </h4>
          <div className="promos__list">
            <div className="promo__container">
              <div className="promo__list">
                <div className="promo__image">
                  <div className="promo__tag"> 50% OFF </div>
                  <img src={""} alt={""} />
                </div>
                <span> Vestido Franzido Recortes </span>
                <div className="promo__values">
                  <span className="promo__price">R$ 139,90</span>
                  <span className="promo__discount"> R$ 69,90</span>
                </div>
              </div>

              <div className="promo__list">
                <div className="promo__image">
                  <div className="promo__tag"> 50% OFF </div>
                  <img src={""} alt={""} />
                </div>
                <span> Vestido Franzido Recortes </span>
                <div className="promo__values">
                  <span className="promo__price">R$ 139,90</span>
                  <span className="promo__discount"> R$ 69,90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product.data,
  };
};

export default connect(mapStateToProps)(Product);
