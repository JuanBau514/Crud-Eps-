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

const passwordTokenBackend = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const userId = urlParams.get("userId");
  
  if (!token || !userId) {
    messageElement.textContent = "Datos incongruentes";
    messageElement.style.color = "red";
    return;    
  }

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword =
    document.getElementById("confirmPassword").value;
  const messageElement = document.getElementById("message");

  if (newPassword !== confirmPassword) {
    messageElement.textContent = "Las contraseñas no coinciden.";
    messageElement.style.color = "red";
    return;
  }

  fetch("api/resetPassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
      userId: userId,
      newPassword: newPassword,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.text();
    })
    .then((data) => {
      messageElement.textContent = data; // Muestra mensaje de éxito
      messageElement.style.color = "green"; // Verde = éxito
      setTimeout(() => { //el redireccionador
        window.location.href = "/login"; //
      }, 5000); // Redirecciona después de 5 segundos
    })
    .catch((error) => {
      error.text().then((errorMessage) => {
        console.error("Error:", errorMessage);
        messageElement.textContent = errorMessage; // Muestra mensaje de error
        messageElement.style.color = "red"; // Rojo = peligro
      });
    });
}

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
              <label htmlFor="newPassword">Nueva Contraseña:</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="password"
                  id="newPassword"
                  //pattern=".+@gmail\.com"
                  placeholder="Nueva Contraseña"
                />
              </div>   
            </div>

             <div className="inputDiv">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  //pattern=".+@gmail\.com"
                  placeholder="Confirmar Contraseña:"
                />
              </div>   
            </div>
            <div id="message"></div>
              <button type="button" onClick={passwordTokenBackend} className="btn flex">
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