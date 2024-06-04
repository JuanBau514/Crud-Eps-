import '../dashboard.css';
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";
import BodyConsultarPacienteMedico from '../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyConsultarPacienteMedico';


function ConsultarPaciente() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyConsultarPacienteMedico />
      </div>
    );
  }
  
  export default ConsultarPaciente;