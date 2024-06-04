import '../dashboard.css';
import BodyHorarioCitasMedico from '../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHorarioCitasMedico';
import SidebarMedico from "../../../Dashboard-Components/SideBar-Section/SidebarMedico";


function HorarioCitas() {
    return (
        <div className="dashboard-container">
            <SidebarMedico />
            <BodyHorarioCitasMedico />
      </div>
    );
  }
  
  export default HorarioCitas;