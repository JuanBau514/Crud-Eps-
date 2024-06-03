import '../dashboardU.css';
import SidebarUser from '../../../Dashboard-Components/SideBar-Section/SidebarUser';
import AgendarCitas from '../../../Dashboard-Components/Body-Section/LastComponents-Section/bodyAgendarCita';
function AgendeCita() {
    return (
        <div className="dashboard-container">
            <SidebarUser /> 
            <AgendarCitas />
      </div>
    );
  }
  
  export default AgendeCita;