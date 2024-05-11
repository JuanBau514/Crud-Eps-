import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Forgot from "./Pages/Forgot/Forgot";
import MainPage from "./Pages/MainPage/MainPage";
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
    path: '/dashboard',
    element: <div><Dashboard/></div>,
  },
  {
    path: '/forgot',
    element: <div><Forgot/></div>
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
