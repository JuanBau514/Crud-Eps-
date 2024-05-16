import { Link } from "react-router-dom";

//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";
import logo from "../../LogginAssets/logo.png";

//IMPORT ICONS
import { IoMdMail } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

//IMPORT SWEET ALERT
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

function Register() {
    
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "El código ha sido enviado",
      text: "Por favor revise su correo para Continuar con el Registro",
      icon: "success"
    }).then(() =>{
      window.location.href = "/login"; 
    })
  }

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
            <Link to={"/login"}>
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
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="correo"
                  pattern=".+@gmail\.com"
                  placeholder="Ingrese su Correo"
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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                  placeholder="Ingrese la Contraseña"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Verifica la Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                  placeholder="Ingrese la Contraseña Nuevamente"
                />
              </div>
            </div>

            <button type="button" onClick={showSwal} className="btn flex">
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
