import "./Login.scss";
import { Link } from "react-router-dom";
import LoginComponent from './LoginComponent.jsx';

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { IoMdMail } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
<<<<<<< HEAD
import { AiOutlineSwapRight } from "react-icons/ai";

//IMPORT SWEET ALERT
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const LoginUser = () => {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const loginMessage = document.getElementById('loginMessage');
    console.log(email, password);
    try {
      if (!email || !password) {
        throw new Error('No hay weas definidas');
      }
    }catch(error) {
      console.log('Falló los datos:', error);
    }
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.text();
    })
    .then(data => {
        loginMessage.textContent = data; // Muestra mensaje de éxito
        loginMessage.style.color = 'green'; // verde = exito
        setTimeout(() => { // el redireccionador
          window.location.href = "/dashboard"; //
        }, 5000); // Redirecciona después de 5 segundos
    })
     .catch(error => {
        error.text().then(errorMessage => {
            console.error('Error:', errorMessage);
            loginMessage.textContent = ''; // Limpia cualquier mensaje previo
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage
            });
        });
    });
}

=======
>>>>>>> e80adb0b8d14b392bb06cd039e381fce62d70ae2

function Login() {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">EPS Salud +</h2>
            <p>Tu salud nuestra preocupacion</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">No tienes cuenta?</span>
            <Link to={"/register"}>
              <button className="btn">Registrate</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Bienvenido de Nuevo!</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="emailLogin">Correo</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="emailLogin"
                  pattern=".+@gmail\.com"
                  placeholder="Ingrese su Correo"
                  required
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="passwordLogin">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="passwordLogin"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                  placeholder="Ingrese la Contraseña"
                  required
                />
              </div>
            </div>
            <LoginComponent />

            <span className="forgotPassword">
              <p>¿Olvidaste tu Contraseña?</p>
              <Link to="/forgot" className="highlight">Click Aquí</Link>
            </span>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
