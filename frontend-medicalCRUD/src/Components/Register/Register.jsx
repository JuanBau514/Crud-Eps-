import "../../App.css";
import { Link } from "react-router-dom";


//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { MdMarkEmailRead } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

function Register() {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">EPS Salud +</h2>
            <p>Tu salud nuestra preocupacion</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Ya tienes cuenta?</span>
            <Link to={"/"}>
              <button className="btn">Iniciar Sesion</button>
            </Link>
          </div>
        </div>    
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Bienvenido a EPS Salud +</h3>
          </div>
          <form action="" className="form grid">            
            
            <div className="inputDiv">
              <label htmlFor="email">Correo</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Ingrese el Correo"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Ingrese el Usuario"
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
            <button type="submit" className="btn flex">
              <span>Registrarme</span>
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

export default Register;