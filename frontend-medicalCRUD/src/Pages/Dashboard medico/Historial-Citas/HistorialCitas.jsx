import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboard.css';
import BodyHistorialCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialCitas";


function HistorialCitas() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyHistorialCitas />
      </div>
    );
  }
  
  export default HistorialCitas;