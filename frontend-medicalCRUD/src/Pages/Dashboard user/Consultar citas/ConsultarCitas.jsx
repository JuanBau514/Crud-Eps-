import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import BodyPerfil from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyPerfil";
import '../dashboard.css';
import BodyConsultarCitas from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyConsultarCitas";


function ConsultarCitas() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyConsultarCitas />
      </div>
    );
  }
  
  export default ConsultarCitas;