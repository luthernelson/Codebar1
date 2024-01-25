import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import telecharger from '../Assets/telecharger.png';
import axios from 'axios';
import './etudiant.css';
function Etudiant() {
    const url ='http://gestinscript.pythonanywhere.com';
    const [etu, setetu] = useState([]);

  useEffect(() => {
     axios.get(url+ '/Etudiant/')
     .then(response=>{ 
        setetu(response.data);
        console.log(response.data);
     })
    .catch (error =>{
        console.log("Error:", error);
    }) 
  }, []);
  console.log('ici',etu);
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3> Liste Etudiants</h3>
                        </div> 
                        <Link to="./Formulaire" className="btn btn-primary float-end"> Add Etudiant</Link>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <td>Matricule</td>
                                        <td>Nom</td>
                                        <td>Prenom</td>
                                        <td>Adresse</td>
                                        <td>Sexe</td>
                                        <td>Date Naissance</td>
                                        <td>E-mail</td>
                                        <td>Telephone</td>
                                    </tr>
                                </thead>
                                <tbody>
                  {etu.map((etudiant) => (
                    <tr key={etudiant.id}>
                      <td>{etudiant.matricule}</td>
                      <td>{etudiant.nom}</td>
                      <td>{etudiant.prenom}</td>
                      <td>{etudiant.adresse}</td>
                      <td>{etudiant.sexe}</td>
                      <td>{etudiant.dateNaiss}</td>
                      <td>{etudiant.email}</td>
                      <td>{etudiant.tel}</td>
                    </tr>
                  ))}
                </tbody>      
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tels">
          <div className="tel"><Link  to={"http://gestinscript.pythonanywhere.com/media/db.xlsx"}><button><img src={telecharger} alt="" />Fichier Excel</button></Link></div>
        </div>
        <br></br>
        <div className="tels">
          <div className="tel"><Link to={"http://gestinscript.pythonanywhere.com/refresh1"}><button>Actualiser</button></Link></div>
        </div>
        </div>
    );

}
export default  Etudiant;