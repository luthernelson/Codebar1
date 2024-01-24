import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import email_icon from '../Assets/hero-bg.png';
import telecharger from '../Assets/telecharger.png';
//import home1_icon from '../Assets/home1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const url ='http://gestinscript.pythonanywhere.com';
  const [matricule, setMatricule] = useState('');
  const [motif, setMotif] = useState('');
  const [montant, setMontant] = useState('');
  const navigate = useNavigate();

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };
  const handleMotifChange = (event) => {
    setMotif(event.target.value);
  };
  const handleMontantChange = (event) => {
    setMontant(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(url+ '/Paiement/',{idetudiant:matricule, motif_paiement:motif, montant_paiement:montant});
        console.log('paiement valide', response.data)
        navigate('/formpay/'+response.data.id)
    } catch (error) {
      console.log('Erreur :', error);
    }
  };
  return (
    <div>
      <nav>
        <div class="nav">
          <div>
            <img src="../images/Capture d’écran 2023-10-05 144314.png"alt=""/>
          </div>
          <div>
            <ul>
              <li>< Link to="/Home">HOME</Link></li>
              <li>< Link to="/Etudiant">ETUDIANT</Link></li>
              <li>< Link to="/user">USER</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    <div className="home" id="home">
    <div className="heading_container heading_centern text-light  bg-dark">
        <h1 className=" align-content-center"><em>PAIEMENT <span className="text-primary">PENSION EN LIGNE</span></em></h1>
    </div>
  <div className="accueil">
      <div className="left-div">
        <h1>Bienvenue sur la page de paiement</h1>
        <br></br>
        <div className="tels">
          <div className="tel"><Link to={"http://gestinscript.pythonanywhere.com/media/db.xlsx"}><button><img src={telecharger} alt="" />Fichier Excel</button></Link></div>
        </div>
        <br></br>
        <div className="tels">
          <div className="tel"><Link to={"http://gestinscript.pythonanywhere.com/refresh1"}><button>Actualiser</button></Link></div>
        </div>
      </div>
      <div className="right-div">
        <div className="card">
        <div className="header">
         <div className="text">FORM</div>
          <div className="underline"></div>
        </div>
           <form onSubmit={handleSubmit}>
           <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder="Matricule" value={matricule}
                  onChange={(handleMatriculeChange)}/>
              </div>
              <div className="input select-input">
                    <img src={email_icon} alt="" />
                    <select className="form-select"
                    value={motif}
                    onChange={(handleMotifChange)}>
                      <option value="inscription">INSCRIPTION</option>
                      <option value="pension">PENSION</option>
                    </select>
              </div>
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="number" placeholder="entrez le montant"
                value={montant}
                onChange={(handleMontantChange)}/>
              </div>
            </div>
            <div className="submit-content">
              <div className="submit">
                <div className="submit"><button type="submit">valider</button></div>
              </div>
          </div>
          </form>
        </div>
      </div>
    </div>

    </div>

    </div>
  );
}

export default Home;
