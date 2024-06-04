import '../dashboard.css';
import BodyHistorialCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialCitas";
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";


function HistorialCitasMedico() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyHistorialCitas />            
      </div>
    );
  }
  
  export default HistorialCitasMedico;