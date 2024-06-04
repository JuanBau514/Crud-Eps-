import SidebarUser from '../../../Dashboard-Components/SideBar-Section/SidebarUser';
import '../dashboardU.css';
import BodyHistorialMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialMedico";


function HistorialMedicoUser() {
    return (
        <div className="dashboard-container">
            <SidebarUser />
            <BodyHistorialMedico />
      </div>
    );
  }
  
  export default HistorialMedicoUser;