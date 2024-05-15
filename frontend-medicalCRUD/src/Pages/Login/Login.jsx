import "./Login.scss";
import { Link } from "react-router-dom";

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaIdCard } from "react-icons/fa";


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
              <label htmlFor="username">Cedula</label>
              <div className="input flex">
                <FaIdCard className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Ingrese la Cedula"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese la Contraseña"
                />
              </div>
            </div>
            <Link to={"/dashboard"}>
              <button type="submit" className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>
            </Link>
            
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