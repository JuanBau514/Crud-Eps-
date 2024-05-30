import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import BodyPerfil from "../../../Dashboard-Components/Body-Section/Perfil-section/BodyPerfil";
import '../dashboard.css';


function Perfil() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyPerfil />
      </div>
    );
  }
  
  export default Perfil;