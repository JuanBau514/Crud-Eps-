import { Link } from "react-router-dom";

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { IoMdMail } from "react-icons/io";
import { AiOutlineSwapRight } from "react-icons/ai";

//IMPORT SWEET ALERT
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

function passwordToken() {

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
          <span className="text">Ya tienes cuenta?</span>
          <Link to={"/login"}>
              <button className="btn">Iniciar Sesion</button>
            </Link>
          </div>
        </div>    
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>¿Olvidaste tu Contraseña?</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Nueva Contraseña:</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="correo"
                  pattern=".+@gmail\.com"
                  placeholder="Nueva Contraseña"
                />
              </div>   
            </div>

             <div className="inputDiv">
              <label htmlFor="email">Confirmar Contraseña</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="correo"
                  pattern=".+@gmail\.com"
                  placeholder="Confirmar Contraseña:"
                />
              </div>   
            </div>
            
              <button type="button" className="btn flex">
                <span>Restablecer Contraseña</span>
                <AiOutlineSwapRight className="icon" />
              </button>
          </form>
        </div>    
      </div>      
    </div>
  );
}

export default passwordToken;