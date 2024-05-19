import "./Login.scss";
import { Link } from "react-router-dom";
import LoginComponent from './LoginComponent.jsx';

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { IoMdMail } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";

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
