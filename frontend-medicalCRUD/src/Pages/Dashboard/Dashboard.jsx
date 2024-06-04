import React, { useEffect, useState } from 'react';
import './dashboardAdmin.css';
import Sidebar from '../../Dashboard-Components/SideBar-Section/Sidebar';
import Body from '../../Dashboard-Components/Body-Section/Body';
import { useNavigate } from 'react-router-dom';
import Top from '../../Dashboard-Components/Body-Section/Top-section/Top';

const Dashboard = React.memo(function Dashboard() {
  /*
  const navigate = useNavigate();
  const [error, setError] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      setError('No hay token presente');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      return; // Salir temprano si no hay token
    }
    fetch('/api/JWTSession', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: 'Bearer ' + token })
    })
    .then(async response => {
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Acceso denegado');
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos recibidos:', data);
      // Puedes manejar los datos aquí
    })
    .catch(error => {
      console.error('Error verificando el token:', error.message);
      setError(error.message);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    });
  }, [navigate]);
  

  if (error) {
    return <div className="error-message">{error} Serás redirigido en 5 segundos</div>;
  }
  */

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <Body />
    </div>
  );
});

export default Dashboard;