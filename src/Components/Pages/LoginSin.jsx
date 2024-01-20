import React from 'react'
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom'
import '../LoginSing/LoginSing.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import axios from 'axios';

function LoginSing() {
  const url ='http://192.168.43.107:8001';
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(matricule);
    console.log(password);
    try {
      const response = await axios.post(url+ '/login/',{nom:matricule,mdp:password});
    
      if (response.data.result === false) {
        // L'authentification a échoué, affichez un message d'erreur ou effectuez une autre action
        console.log('Échec de l\'authentification');
      } else {
        // L'authentification a réussi, traitez ici la réponse de l'API
        console.log('Données de l\'utilisateur connecté :', response.data);
        navigate('./Home')
      }
    } catch (error) {
      console.log('Erreur :', error);
    }
  };


  return (
    <div className="container">
      <div className="header">
       <div className="text">CONNEXION</div>
        <div className="underline"></div>
      </div>
         <form onSubmit={handleSubmit}>
         <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="text" id="matricule" placeholder="Matricule" value={matricule} onChange={handleMatriculeChange} />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </div>
          </div>
          <div className="submit-content">
            <div className="submit">
              <div className="submit" ><button type="submit">Se Connecter</button></div>
            </div>
          </div>
         </form>
          
    </div>
  )
}

export default LoginSing