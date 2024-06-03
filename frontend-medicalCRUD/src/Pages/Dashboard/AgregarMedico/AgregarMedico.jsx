import Sidebar from "../../../Dashboard-Components/SideBar-Section/Sidebar";
import '../dashboard.css';
import BodyAgregarMedico from "../../../Dashboard-Components/Body-Section/LastComponents-Section/BodyAgregarMedico";


function AgregarMedico() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <BodyAgregarMedico />
      </div>
    );
  }
  
  export default AgregarMedico;