import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Forgot from "./Components/Forgot/Forgot";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
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
