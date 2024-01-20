import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Formulaire.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import LoginSing from './Components/LoginSing/LoginSin';
// import Home from './Components/Pages/Home';
//import MyRoute from './Router';
//import Navbar from './Components/Composent/Navbar';

//<Navbar />; 
//<MyRoute />
function Formulaire() {
  const url ='http://192.168.43.107:8001';
  const [matricule, setMatricule] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [datenaissance, setDatenaiss] = useState('');
  const [sexe, setSexe] = useState('');
  const [nationalite, setNationalite] = useState('');
  const [idfiliere, setIdfiliere] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motpasse, setMotpasse] = useState('');
  
  const navigate = useNavigate();

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };
  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDatenaissChange = (event) => {
    setDatenaiss(event.target.value);
  };
  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };
  const handleNationaliteChange = (event) => {
    setNationalite(event.target.value);
  };
  const handleIdfiliereChange = (event) => {
    setIdfiliere(event.target.value);
  };
  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };
  const handleMotpassChange = (event) => {
    setMotpasse(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(url+ '/Etudiant/',{matricule:matricule,nom:nom,prenom:prenom,adresse:adresse
      ,email:email,dateNaiss:datenaissance,sexe:sexe,nationalite:nationalite,idfiliere:idfiliere,tel:telephone,mdp:motpasse});
        console.log('Etudiant ajouter avec success', response.data)
        navigate('/Etudiant')
    } catch (error) {
      console.log('Erreur :', error);
    }
  };
  return (
    <div>
        <div className= 'container'>

          <form action="" className= "mx-auto mt-40" method="post"onSubmit={handleSubmit}>
            <div className=" mx-auto text-3xl- text-primary">
              <h2> Formulaire d'inscription </h2>
            </div>
            <div>
              <label htmlFor="">Matricule</label>
              <input type="text" className="form-control"  value={matricule}
                  onChange={(handleMatriculeChange)}/>
            </div>
            <div>
              <label htmlFor="">Nom</label>
              <input type="text" className="form-control"  value={nom}
                  onChange={(handleNomChange)}/>
            </div>
            <div>
              <label htmlFor="">Prenom</label>
              <input type="text" className="form-control"value={prenom}
                  onChange={(handlePrenomChange)}/>
            </div>
            <div>
              <label htmlFor="">Adresse</label>
              <input type="text" className="form-control"value={adresse}
                  onChange={(handleAdresseChange)}/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="Email" className="form-control"value={email}
                  onChange={(handleEmailChange)}/>
            </div>
            <div>
              <label htmlFor="">Date de naissance</label>
              <input type="Date" className="form-control"value={datenaissance}
                  onChange={(handleDatenaissChange)}/>
            </div>
            <div>
              <label htmlFor="">Sexe</label>
              <select className="form-control"value={sexe}
                  onChange={(handleSexeChange)}>
                <option className="form-control">Masculin</option>
                <option className="form-control">Feminin</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Nationalite</label>
              <input type="text" className="form-control"value={nationalite}
                  onChange={(handleNationaliteChange)}/>
            </div>
            <div>
              <label htmlFor="">Idfiliere</label>
              <input type="text" className="form-control"value={idfiliere}
                  onChange={(handleIdfiliereChange)}/>
            </div>
            <div>
              <label htmlFor="">Telephone</label>
              <input type="Tel" className="form-control"value={telephone}
                  onChange={(handleTelephoneChange)}/>
            </div>
            <div>
              <label htmlFor="">Mot de passe</label>
              <input type="password" className="form-control"value={motpasse}
                  onChange={(handleMotpassChange)}/>
            </div>
            <div>

              <button className="btn btn-outline-primary btn-block mt-3" type="submit">
                S'inscrire
              </button>
            </div>
          </form>   

        </div>
    </div>
  );
}

export default Formulaire
