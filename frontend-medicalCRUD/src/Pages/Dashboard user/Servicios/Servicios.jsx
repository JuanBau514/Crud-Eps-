import '../dashboardU.css';
import SidebarUser from '../../../Dashboard-Components/SideBar-Section/SidebarUser';
import BodyServiciosUser from '../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyServiciosUser';


function ServiciosUser() {
    return (
        <div className="dashboard-container">
            <SidebarUser />   
            <BodyServiciosUser />
      </div>
    );
  }
  
export default ServiciosUser;