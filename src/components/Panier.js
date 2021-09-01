import React, { useContext } from "react";
import { BasketContext } from "../App";
import server from "../Config";
import { useHistory } from "react-router";
import { CheckoutForm } from "./credit-card";
import { CloseButton } from "react-bootstrap";

const Stripetestdesign = () => {
  let history = useHistory();
  let token = sessionStorage.getItem("jwt");
  if (token === null || token === undefined) {
    history.push("/login");
  }
  const { basket, dispatch } = useContext(BasketContext);

  const removeItem = (id) => {
    dispatch({ type: "del", id: id });
  };
  const addQte = (article) => {
    dispatch({ type: "add", article: article });
  };

  const removeQte = (article) => {
    dispatch({ type: "remove", article: article });
  };

  let Price = basket.reduce(
    (total, value) => total + value.prix * value.qte,
    0
  );

  return (
    <div>
      <div>
        <CheckoutForm price={Price} />
      </div>
      <aside id="summary">
        <div id="order-items">
          {basket?.map((p) => (
            <div key={p.id} className="line-item">
              <img
                className="image"
                src={`${server}/uploads/` + p.img}
                alt="Stripe Pins"
              />
              <CloseButton
                id="closebuttonpanier"
                onClick={() => removeItem(p.id)}
              />
              <button id="buttonpanier">
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={() => addQte(p)}
                />
              </button>
              <button id="buttonpanierminus">
                {" "}
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={() => removeQte(p)}
                />
              </button>

              <div className="label">
                <p className="product">{p.title}</p>
                <p className="sku">{p.subtitle}</p>
              </div>
              <p className="count">
                {" "}
                {p.qte} x €{p.prix}
              </p>
              <p className="price"> {p.prix * p.qte}€</p>
            </div>
          ))}
        </div>

        <div id="order-total">
          <div className="line-item subtotal">
            <p className="label">Subtotal </p>
            <p className="price" data-subtotal="">
              {Price}€
            </p>
          </div>
          <div className="line-item shipping">
            <p className="label">Shipping</p>
            <p className="price">Free</p>
          </div>

          <div className="line-item total">
            <p className="label">Total</p>
            <p className="price" data-total="">
              {Price}€
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Stripetestdesign;
