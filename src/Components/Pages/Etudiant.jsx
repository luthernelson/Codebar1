import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import modifier from '../Assets/modifier.png';
import supprimer from '../Assets/supprimer.png';
import './etudiant.css';
function Etudiant() {
    const url ='http://192.168.43.107:8001';
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
                            <h3> Liste Etudiants <Link to="./Formulaire" className="btn btn-primary float-end"> Add Etudiant</Link></h3>
                        </div> 
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
                                        <td colSpan={2}>Action</td>
                                        <td></td>
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
                      <td><img src={modifier} alt="" />Editer</td>
                      <td><img src={supprimer} alt="" />Delete</td>
                    </tr>
                  ))}
                </tbody>      
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default  Etudiant;