import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboardAdmin.css';
import BodyHistorialMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyHistorialMedico";


function HistorialMedico() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyHistorialMedico />
      </div>
    );
  }
  
  export default HistorialMedico;