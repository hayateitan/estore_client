import React, { useState, useContext } from "react";
import { BasketContext } from "../App";
import { useHistory } from "react-router";
import axios from "axios";
import server from "../Config";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Form } from "react-bootstrap";
export function CheckoutForm({ price }) {
  const { basket, dispatch } = useContext(BasketContext);
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  let history = useHistory();
  let token = sessionStorage.getItem("jwt");
  if (token === null || token === undefined) {
    history.push("/login");
  }

  const getSecret = async () => {};

  // let commande = JSON.stringify(basket)
  // console.log( commande+'ma commande credit card')

  const cardStyle = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    if (price > 0) {
      const { data } = await axios.post(
        `${server}/pay`,
        { price: price },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const payload = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        const res = await axios.post(
          `${server}/macommande`,
          {
            macommande: {
              basket: basket,
              contact: { adresse: adresse, phone: phone, name: name },
            },
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (res.data === 1) {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
          dispatch({ type: "clean" });
          history.push("/Home");

        } else {
        }
      }
    }
  };

  return (
    <div className="AppWrapper">
      <Form.Control
        id="fullName"
        type="text"
        placeholder="FullName"
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Control
        id="fullAdresse"
        type="text"
        placeholder="FullAdresse"
        onChange={(e) => setAdresse(e.target.value)}
      />
      <Form.Control
        id="numberPhone"
        type="number"
        placeholder="Phone  +33.........."
        onChange={(e) => setPhone(e.target.value)}
      />

      <form id="payment-form" onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
        </fieldset>
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
          className="SubmitButton"
          onClick={() => getSecret(price)}
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now" + " " + price + "$"
            )}
          </span>
        </button>

        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}

        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
}
