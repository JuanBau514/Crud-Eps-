import '../dashboard.css';
import BodyConsultarCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyConsultarCitas";
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";


function ConsultarPaciente() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyConsultarCitas />
      </div>
    );
  }
  
  export default ConsultarPaciente;