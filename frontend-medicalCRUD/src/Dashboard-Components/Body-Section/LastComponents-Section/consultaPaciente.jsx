import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboard.css';
import BodyConsultarCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyConsultarCitas";


function consultaPaciente() {
    return (
        <div className="dashboard-container">
            <Sidebar/>
            <BodyConsultarCitas />
      </div>
    );
  }
  
  export default consultaPaciente;