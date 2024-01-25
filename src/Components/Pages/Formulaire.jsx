import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulaire.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Formulaire() {
  const url = "http://gestinscript.pythonanywhere.com";
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [datenaissance, setDatenaiss] = useState("");
  const [sex, setSexe] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [idfilier, setIdfilier] = useState([]);
  const [idfiliere, setIdfiliere] = useState([]);
  const [telephone, setTelephone] = useState("");
  const [motpasse, setMotpasse] = useState("");

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
    setIdfilier(event.target.value);
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
      const response = await axios.post(url + "/Etudiant/", {
        id: 1,
        matricule: matricule,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        email: email,
        dateNaiss: datenaissance,
        sexe: sex,
        nationalite: nationalite,
        idfiliere: 1,
        tel: telephone,
        mdp: motpasse,
      });
      console.log("Etudiant ajoute avec succes", response.data);
      navigate("/Etudiant");
    } catch (error) {
      console.log("Erreur :", error);
    }
  };
  useEffect(() => {
    axios
      .get(url + "/Filiere/")
      .then((response) => {
        setIdfiliere(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <form
          action=""
          className="mx-auto mt-40"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto text-3xl- text-primary">
            <h2> Formulaire d'inscription </h2>
            <div className="formulaire-barre"></div>
            {/* Reste du code du formulaire */}
          </div>
          <div>
            <label htmlFor="">Matricule</label>
            <input
              type="text"
              className="form-control"
              value={matricule}
              onChange={handleMatriculeChange}
            />
          </div>
          <div>
            <label htmlFor="">Nom</label>
            <input
              type="text"
              className="form-control"
              value={nom}
              onChange={handleNomChange}
            />
          </div>
          <div>
            <label htmlFor="">Prenom</label>
            <input
              type="text"
              className="form-control"
              value={prenom}
              onChange={handlePrenomChange}
            />
          </div>
          <div>
            <label htmlFor="">Adresse</label>
            <input
              type="text"
              className="form-control"
              value={adresse}
              onChange={handleAdresseChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="Email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="">Date de naissance</label>
            <input type="date"
              className="form-control"
              value={datenaissance}
              onChange={handleDatenaissChange}
            />
          </div>
          <div>
            <label htmlFor="">Sexe</label>
            <select
              className="form-control"
              value={sex}
              onChange={handleSexeChange}
            >
              <option value="">Sélectionnez le sexe</option>
              <option value="F">F</option>
              <option value="M">M</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Nationalité</label>
            <input
              type="text"
              className="form-control"
              value={nationalite}
              onChange={handleNationaliteChange}
            />
          </div>
          <div>
            <label htmlFor="">Filiere</label>
            <select
              className="form-control"
              value={idfilier}
              onChange={handleIdfiliereChange}
            >
              {idfiliere.map((filiere) => (
                <option key={filiere.id}>
                  {filiere.nom}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Téléphone</label>
            <input
              type="text"
              className="form-control"
              value={telephone}
              onChange={handleTelephoneChange}
            />
          </div>
          <div>
            <label htmlFor="">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={motpasse}
              onChange={handleMotpassChange}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulaire;