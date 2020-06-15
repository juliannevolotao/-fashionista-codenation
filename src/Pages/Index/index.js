import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import "./styles.sass";
import noImage from "../../assets/noImage.jpg";

import { connect, useDispatch } from "react-redux";
import { getProducts } from "../../Store/Actions/indexProducts";
import { setProduct } from "../../Store/Actions/oneProduct";

import { doGetRequest } from "../../Helpers/apiHelper";
import { v4 as uuidv4 } from "uuid";

const Index = ({ products }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await doGetRequest("/catalog");
      dispatch(getProducts(response));
    };

    fetchProducts();
  }, [dispatch]);

  const catchProductName = (nameProduct) => {
    return nameProduct.replace(/\s/g, "_").toLowerCase();
  };

  const getSelectedProduct = (product) => {
    const linkto = catchProductName(product.name);
    dispatch(setProduct(product));
    history.push(`/produto/${linkto}`);
  };

  return (
    <>
      <div className="items">
        <h4> Todas as peças </h4>

        <div className="items__list">
          {products.map((product) => {
            return (
              <div
                className="item__list"
                onClick={() => getSelectedProduct(product)}
                key={uuidv4()}
              >
                <div className="item__image">
                  {product.on_sale && (
                    <div className="item__promo">
                      {" "}
                      {product.discount_percentage} OFF{" "}
                    </div>
                  )}

                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <img src={noImage} alt={"No image"} />
                  )}
                </div>
                <div className="item__text">
                  <p className="item__name"> {product.name} </p>
                  <div className="item__discount">
                    {product.on_sale ? (
                      <>
                        <span className="item__price">
                          {" "}
                          {product.regular_price}{" "}
                        </span>
                        <span className="discount__price">
                          {" "}
                          {product.actual_price}{" "}
                        </span>
                      </>
                    ) : (
                      <span className="discount__price">
                        {" "}
                        {product.regular_price}{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* <Link className="item__list" to="/produto/2">
            <div className="item__image">
              <img src={""} alt={""} />
            </div>
            <div className="item__text">
              <p className="item__name"> VESTIDO TRANSPASSE BOW </p>
              <span className="item__price"> R$ 199,90 </span>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps, { getProducts })(Index);
