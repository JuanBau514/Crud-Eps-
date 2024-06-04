import '../dashboard.css';
import BodyHistorialDiagnosticosMedico from '../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialDiagnosticosMedico';
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";


function HistorialDiagnosticos() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyHistorialDiagnosticosMedico/>
      </div>
    );
  }
  
  export default HistorialDiagnosticos;