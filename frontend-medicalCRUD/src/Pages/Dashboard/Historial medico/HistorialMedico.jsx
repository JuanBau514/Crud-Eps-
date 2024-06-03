import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import BodyPerfil from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyPerfil";
import '../dashboard.css';
import BodyHistorialMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialMedico";


function HistorialMedico() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyHistorialMedico />
      </div>
    );
  }
  
  export default HistorialMedico;