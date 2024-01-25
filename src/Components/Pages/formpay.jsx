import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
//import { StripeCardNumberElement } from '@stripe/stripe-js'
import { useState } from "react";
import './formpay.css';
import axios from 'axios';
function Formpayer(props) {
  const url ='http://gestinscript.pythonanywhere.com';
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const generateStripeToken = async () => {
    if (!stripe || !elements) {
      console.log("le stripe et element n existe pas ");
      return;
    }
    const CardNumberElements = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(CardNumberElements, {
      name: name,
      address_zip: postalCode,
    });
    if (!token || error) {
      console.log(error || "token is not set ");
      throw error;
    }
    return token;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await generateStripeToken();
      alert(token?.id);
      const response = await axios.post(url+ '/Paiement/',{data:token, amont:props.montant});
      console.log('paiement valide', response.data)
      console.log(props.montant);
    } catch (error) {
      console.log("erreur :", error);
    }
  };

  return (
    <div className="pay">
      <h1 className="titre">Payement Par Carte Bancaire </h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="labels">
          <label className="label" htmlFor="CardNumber">
            Card Number
          </label>
          <CardNumberElement className="payer" id="cardNumber" />
        </div>
        <div className="labels">
          <label className="label" htmlFor="cardExp">
            Exp
          </label>
          <CardExpiryElement className="payer" id="cardExp" />
        </div>
        <div className="labels">
          <label className="label" htmlFor="cvc">
            CVC
          </label>
          <CardCvcElement className="payer" id="cvc" />
        </div>
        <div className="labels">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input"
            id="name"
            required
          />
        </div>
        <div className="labels">
          <label className="label" htmlFor="postalcode">
            Code Postal
          </label>
          <input
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            className="input"
            id="postalcode"
            required
          />
        </div>
        <div className="btn">
          <button className="btn-btn">valider le payement</button>
        </div>
      </form>
    </div>
  );
}

export default Formpayer;
