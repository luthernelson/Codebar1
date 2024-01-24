import  React,{Fragment, useRef, useState, useEffect}  from "react";
import { Elements } from "@stripe/react-stripe-js";
import Formpayer from "./formpay";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import axios from "axios";
const stripe= loadStripe('pk_test_51OaZeFFqBmvfi26IdBLgmOe18XE5Gkg9srF4EUFa3MJj4tvbiJoLzazGwMXT8y2jIAZcmD3Np8l1YuSEAzAFbiYj001ywm9Bgy')



    const PayStripForm = () => {
    const {id} = useParams() ;
    const [payer,setPayer] = useState([]);
    useEffect(() => {
      axios.get(`http://gestinscript.pythonanywhere.com/Paiement/${id}`).then((response) => {
        console.log(response.data);
        setPayer(response.data);
      });
    }, []);

  return (


        <Elements stripe={stripe}>
            <Formpayer montant = { payer.montant_paiement }/>
        </Elements>
   

   
    
  );
};

export default PayStripForm;