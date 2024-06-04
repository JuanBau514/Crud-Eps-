import BodyPerfil from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyPerfil";
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";

import '../dashboard.css';


function Perfil() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyPerfil />
      </div>
    );
  }
  
  export default Perfil;