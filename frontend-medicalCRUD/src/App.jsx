import Login from "./Pages/Login/Login";
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
import UserPerfil from "./Pages/Dashboard user/Perfil/userPerfil";
import HistorialMedico from "./Pages/Dashboard/Historial medico/HistorialMedico";
import HistorialMedicoMedico from "./Pages/Dashboard medico/Historial medico/HistorialMedicoMedico";
import HistorialCitas from "./Pages/Dashboard/Historial-Citas/HistorialCitas";
import ConsultarCitas from "./Pages/Dashboard/Consultar citas/ConsultarCitas";
import AgregarMedico from "./Pages/Dashboard/AgregarMedico/AgregarMedico";
import DeshabilitarMedico from "./Pages/Dashboard/DeshabilitarMedico/DeshabilitarMedico";
import ReportesCitas from "./Pages/Dashboard/ReportesCitas/ReportesCitas";
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
    path:'/perfil',
    element: <div><Perfil/></div>
  },
  {
    path:'/dashboardMedico/perfil',
    element: <div><MedicoPerfil/></div>
  },
  {
    path:'/dashboardUser/perfil',
    element: <div><UserPerfil/></div>
  },
  {
    path:'/historialMedico',
    element: <div><HistorialMedico/></div>  
  },
  {
    path:'/dashboardMedico/historialMedico',
    element: <div><HistorialMedicoMedico/></div>  
  },
  {
    path:'/dashboardMedico/historialCitas',
    element: <div><HistorialCitas/></div>  
  },
  {
    path:'/consultarCitas',
    element: <div><ConsultarCitas/></div>  
  },       
  {
    path:'/dashboardMedico/historialCitas',
    element: <div><ConsultarCitas/></div>  
  },
  {
    path:'/agregarMedico',
    element: <div><AgregarMedico/></div>  
  },
  {
    path:'/deshabilitarMedico',
    element: <div><DeshabilitarMedico/></div>  
  },
  {
    path:'/reportesCitas',
    element: <div><ReportesCitas/></div>  
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
