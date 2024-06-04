import SidebarUser from '../../../Dashboard-Components/SideBar-Section/SidebarUser';
import BodyPerfil from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyPerfil";
import '../dashboardU.css';


function PerfilUser() {
    return (
        <div className="dashboard-container">
            <SidebarUser />
            <BodyPerfil />
      </div>
    );
  }
  
  export default PerfilUser;