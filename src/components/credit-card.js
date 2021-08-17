import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios'
import server from '../Config'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export function CheckoutForm({ price }) {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  let history = useHistory();
  let token = sessionStorage.getItem('jwt');
  if (token === null || token === undefined) {
    history.push("/login");
  }

  const getSecret = async () => {
    
  }



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
          color: "#fce883"
        },
        "::placeholder": {
          color: "#87bbfd"
        }
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);


    if (price > 0) {
      const { data } = await axios.post(`${server}/pay`, { price: price }, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })

      const payload = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    }

    // if (result.paymentIntent.status === 'succeeded') {
    //   // Show a success message to your customer
    //   // There's a risk of the customer closing the window before callback
    //   // execution. Set up a webhook or plugin to listen for the
    //   // payment_intent.succeeded event that handles any business critical
    //   // post-payment actions.
    // }

    
  };

  return (
    <div className="AppWrapper">
      <form id="payment-form" onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        </fieldset>
        <button disabled={processing || disabled || succeeded} id="submit" className="SubmitButton" onClick={() => getSecret(price)} >

          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now" + ' ' + price + '$'
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
          <a href={`https://dashboard.stripe.com/test/payments`} >

            {" "}
            Stripe dashboard.
          </a> Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
}