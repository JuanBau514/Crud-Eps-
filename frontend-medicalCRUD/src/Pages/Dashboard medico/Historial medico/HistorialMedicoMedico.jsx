import '../dashboard.css';
import BodyHistorialMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialMedico";
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";


function HistorialMedicoMedico() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyHistorialMedico />
      </div>
    );
  }
  
  export default HistorialMedicoMedico;