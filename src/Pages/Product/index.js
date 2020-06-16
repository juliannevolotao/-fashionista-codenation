import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { FiArrowLeft, FiShoppingBag, FiX } from "react-icons/fi";

import "./styles.sass";
import noImage from "../../assets/noImage.jpg";
import { animateScroll as scroll } from "react-scroll";
import { toast } from "react-toastify";

import { connect, useDispatch } from "react-redux";
import { setItemInCart } from "../../Store/Actions/cart";

function Product({ product, size }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");

  useEffect(() => {
    size = "";
    scroll.scrollToTop();
  });

  useEffect(() => {
    if (!product?.name) {
      history.push("/");
    }
    setSizeSelected("Escolha um tamanho");
  }, [history]);

  const handleSelectSize = (size) => {
    if (!size.available) {
      return toast.info("Tamanho não está disponível.");
    }

    setSizeSelected(size.size);
  };

  const handleCartAdd = () => {

    if(sizeSelected !== '' && sizeSelected !== "Escolha um tamanho"){
      dispatch(
        setItemInCart({
          product: product,
          selectedSize: sizeSelected,
          quantity: Number(quantity),
        })
      );
      return toast.success("Produto adicionado ao carrinho com sucesso!");
    }
    else {
      return toast.info("Escolha um tamanho válido!");
    }
  };

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
                <span> {sizeSelected} </span>
              </div>

              <div className="size__options">
                {product.sizes?.map((size, index) => (
                  <div
                    key={index}
                    className={`option__box ${size.size === sizeSelected ? 'option__box--active' : ''}`}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size.size}
                    {size.size === sizeSelected}
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
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <button className="info__add" onClick={() => handleCartAdd(size)}>
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
  // console.log(state);
  return {
    product: state.product.data,
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(Product);
