import "./Login.scss";
import { Link } from "react-router-dom";

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { IoMdMail } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

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
        //redireccionar.txt
        setTimeout(() => { //el redireccionador
          window.location.href = "/dashboard"; //
        }, 5000); // Redirecciona después de 5 segundos
    })
    .catch(error => {
        error.text().then(errorMessage => {
            console.error('Error:', errorMessage);
            loginMessage.textContent = errorMessage; // Muestra mensaje de error
            loginMessage.style.color = 'red'; //SIGNIFICA PELIGRO
        });
    });  
}


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
              <label htmlFor="correo">Correo</label>
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
              <label htmlFor="password">Contraseña</label>
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
            <div id="loginMessage"></div>
            
              <button type="button" onClick={LoginUser} className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>
             
            
            <Link to={"/forgot"}>
              <span className="forgotPassword">
                Olvidaste tu Contraseña? <a href="">Click Aqui</a>
              </span>
            </Link>
          </form>
        </div>    
      </div>      
    </div>
  );
}

export default Login;