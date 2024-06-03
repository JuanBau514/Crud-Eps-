import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboard.css';
import BodyDeshabilitarMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyDeshabilitarMedico";


function DeshabilitarMedico() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyDeshabilitarMedico />
      </div>
    );
  }
  
  export default DeshabilitarMedico;