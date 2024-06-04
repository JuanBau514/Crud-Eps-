import SidebarUser from '../../../Dashboard-Components/SideBar-Section/SidebarUser';
import '../dashboardU.css';
import BodyHistorialCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialCitas";


function HistorialCitasUser() {
    return (
        <div className="dashboard-container">
            <SidebarUser />
            <BodyHistorialCitas />
      </div>
    );
  }
  
  export default HistorialCitasUser;