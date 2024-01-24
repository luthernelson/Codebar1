import { Routes, Route} from 'react-router-dom'
import Home from '../Components/Pages/Home';
import Etudiant from '../Components/Pages/Etudiant';
import User from '../Components/Pages/User';
import LoginSing from '../Components/Pages/LoginSin';
import PayStripForm from '../Components/Pages/payStripForm';
import Formulaire from '../Components/Pages/Formulaire'
function MyRoute(){

    return(

        
        <Routes>
            <Route  path="/" element={<LoginSing/>}  />
            <Route  path="/Home" element={<Home/>}  />
            <Route  path="/formpay/:id" element={<PayStripForm/>}  />
            <Route path="/Etudiant" element={<Etudiant />}  />
            <Route path="/User" element={<User />} />
            <Route path="/Etudiant/Formulaire" element={<Formulaire />} />
        </Routes>
    )
}

export default  MyRoute;