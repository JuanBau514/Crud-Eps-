import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import BodyPerfil from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyPerfil";
import '../dashboard.css';
import BodyAutorizarMedicamentos from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyAutorizarMedicamentos";


function AutorizarMedicamentos() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyAutorizarMedicamentos />
      </div>
    );
  }
  
  export default AutorizarMedicamentos;