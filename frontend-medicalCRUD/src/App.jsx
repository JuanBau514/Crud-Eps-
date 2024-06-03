import Login from "./Pages/Login/Login";
import AgendeCita from "./Pages/Dashboard user/AgendarCita/AgendarCita";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MedicoDashboard from "./Pages/Dashboard medico/MedicoDashboard";
import UserDashboard from "./Pages/Dashboard user/UserDashboard";
import Forgot from "./Pages/Forgot/Forgot";
import MainPage from "./Pages/MainPage/MainPage";
import RegisterToken from "./Pages/RegisterToken/RegisterToken";
import PasswordToken from "./Pages/passwordToken/passwordToken";
import Perfil from "./Pages/Dashboard/Perfil/Perfil";
import MedicoPerfil from "./Pages/Dashboard medico/Perfil/medicoPerfil";
import HistorialMedico from "./Pages/Dashboard/Historial medico/HistorialMedico";
import HistorialMedicoMedico from "./Pages/Dashboard medico/Historial medico/HistorialMedicoMedico";
import HistorialCitas from "./Pages/Dashboard/Historial-Citas/HistorialCitas";
import ConsultarCitas from "./Pages/Dashboard/Consultar citas/ConsultarCitas";
import AgregarMedico from "./Pages/Dashboard/AgregarMedico/AgregarMedico";
import DeshabilitarMedico from "./Pages/Dashboard/DeshabilitarMedico/DeshabilitarMedico";
import ReportesCitas from "./Pages/Dashboard/ReportesCitas/ReportesCitas";
import ServiciosUser from "./Pages/Dashboard user/Servicios/Servicios";
import PerfilUser from "./Pages/Dashboard user/Perfil/PerfilUser";
import HistorialCitasUser from "./Pages/Dashboard user/HistorialCitas/HistorialCitas";
import HistorialMedicoUser from "./Pages/Dashboard user/Historial medico/HistorialMedico";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
   {
    path: '/',
    element: <div><MainPage/></div>,
  },
  {
    path: '/login',
    element: <div><Login/></div>,
  },
  {
  path: '/register',
  element: <div><Register/></div>,
  }, 
  {
    path: '/dashboardAdmin',
    element: <div><Dashboard/></div>,
  },
  {
    path: '/dashboardMedico',
    element: <div><MedicoDashboard/></div>,
  },
   {
    path: '/dashboardUser',
    element: <div><UserDashboard/></div>,
  },
  {
    path: '/forgot',
    element: <div><Forgot/></div>
  },
  {
    path: '/registertoken',
    element: <div><RegisterToken/></div>
  },
  {
    path:'/passwordToken',
    element: <div><PasswordToken/></div>
  },
  {
    path:'/dashboardAdmin/perfil',
    element: <div><Perfil/></div>
  },
  {
    path:'/dashboardMedico/perfil',
    element: <div><MedicoPerfil/></div>
  },
  {
    path:'/dashboardUser/perfil',
    element: <div><PerfilUser/></div>
  },
  {
    path:'/dashboardAdmin/historialMedico',
    element: <div><HistorialMedico/></div>  
  },
  {
    path:'/dashboardMedico/historialMedico',
    element: <div><HistorialMedicoMedico/></div>  
  },
  {
    path:'/dashboardUser/historialMedico',
    element: <div><HistorialMedicoUser/></div>  
  },
  {
    path:'/dashboardMedico/historialCitas',
    element: <div><HistorialCitas/></div>  
  },
  {
    path:'/dashboardAdmin/historialCitas',
    element: <div><HistorialCitas/></div>  
  },
  {
    path:'/dashboardUser/historialCitas',
    element: <div><HistorialCitasUser/></div>  
  },
  {
    path:'/dashboardAdmin/consultarCitas',
    element: <div><ConsultarCitas/></div>  
  },    
  {
    path:'/dashboardMedico/consultaPacienta',
    element: <div><ConsultarCitas/></div>  
  },
  {
    path:'/dashboardAdmin/agregarMedico',
    element: <div><AgregarMedico/></div>  
  },
  {
    path:'/dashboardAdmin/deshabilitarMedico',
    element: <div><DeshabilitarMedico/></div>  
  },
  {
    path:'/dashboardAdmin/reportesCitas',
    element: <div><ReportesCitas/></div>  
  },
  {
    path:'/dashboardUser/agendarCita',
    element: <div><AgendeCita/></div>
  },
  {
    path:'/dashboardUser/servicios',
    element: <div><ServiciosUser/></div>
  }
]);

function App() {  
  return (
   <div>
     <RouterProvider router={router}/>
   </div>   
  );
}

export default App
