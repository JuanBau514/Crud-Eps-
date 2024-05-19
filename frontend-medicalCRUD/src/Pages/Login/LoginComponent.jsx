import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSwapRight } from 'react-icons/ai';

//IMPORT SWEET ALERT
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const errorSweet = withReactContent(Swal);

function LoginComponent() {
  const navigate = useNavigate();

  const LoginUser = () => {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const loginMessage = document.getElementById("loginMessage");

    if (!email || !password) {
      errorSweet.fire({
        icon: 'error',
        title: 'Error',
        text: 'Rellene los campos.'
      });
      return;
    }

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(data => {
      if (data.token) {
        errorSweet.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: data.message,
          showConfirmButton: true,
          timer: 3000 // La alerta se cerrará automáticamente después de 3 segundos
        }).then(() => {
          localStorage.setItem("jwtToken", data.token);
          navigate('/dashboard');
        });
      } else {
        throw new Error("Token no proporcionado");
      }
    })
    .catch(error => {
      if (error instanceof Response) {
        error.json().then(errorData => {
          errorSweet.fire({
            icon: 'error',
            title: 'Error',
            text: errorData.message || "Error desconocido"
          });
        });
      } else {
        errorSweet.fire({
          icon: 'error',
          title: 'Error',
          text: error.message ||  "Error al procesar la solicitud."
        });
      }
    });
  };

  return (
    <div>
      <div id="loginMessage"></div>
      <button type="button" onClick={LoginUser} className="btn flex">
        <span>Login</span>
        <AiOutlineSwapRight className="icon" />
      </button>
    </div>
  );
}

export default LoginComponent;
