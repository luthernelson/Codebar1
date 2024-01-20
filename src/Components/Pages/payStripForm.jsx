import  React,{Fragment, useRef, useState, useEffect}  from "react";
import { Elements } from "@stripe/react-stripe-js";
import Formpayer from "./formpay";
import { loadStripe } from "@stripe/stripe-js";
const stripe= loadStripe('pk_test_51OaZeFFqBmvfi26IdBLgmOe18XE5Gkg9srF4EUFa3MJj4tvbiJoLzazGwMXT8y2jIAZcmD3Np8l1YuSEAzAFbiYj001ywm9Bgy')

const PayStripForm = () => {

  return (


        <Elements stripe={stripe}>
            <Formpayer />
        </Elements>
   

   
    
  );
};

export default PayStripForm;