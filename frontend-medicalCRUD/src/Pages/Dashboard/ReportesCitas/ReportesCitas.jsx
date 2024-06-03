import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboard.css';
import BodyReportesCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyReportesCitas";


function ReportesCitas() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyReportesCitas />
      </div>
    );
  }
  
  export default ReportesCitas;