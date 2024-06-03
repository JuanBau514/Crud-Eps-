import '../dashboardAdmin.css';
import BodyHistorialCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialCitas";
import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";



function HistorialCitas() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyHistorialCitas />
      </div>
    );
  }
  
  export default HistorialCitas;