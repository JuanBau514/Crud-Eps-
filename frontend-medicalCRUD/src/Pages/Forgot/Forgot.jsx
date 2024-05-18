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

const forgotPassword = () => {
  const email = document.getElementById('recoveryEmail').value;
  const recoveryMessage = document.getElementById('recoveryMessage'); // Obtiene el elemento donde mostrarás los mensajes

  fetch('api/recover', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
  })
  .then(response => {
      if (!response.ok) {
          throw response;
      }
      return response.text();
  })
  .then(data => {
      recoveryMessage.textContent = data; // Muestra mensaje de éxito
      recoveryMessage.style.color = 'green'; // Verde = éxito
      //redireccionar...
      setTimeout(() => { //el redireccionador
        window.location.href = "/"; //
    },  3000); // Redirecciona después de 5 segundos
  })
  .catch(error => {
      error.text().then(errorMessage => {
          console.error('Error:', errorMessage);
          recoveryMessage.textContent = errorMessage; // Muestra mensaje de error
          recoveryMessage.style.color = 'red'; // Rojo = peligro
      });
  });
}

function Forgot() {

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "El código ha sido enviado",
      text: "Por favor revise su correo para restablecer la contraseña",
      icon: "success"
    }).then(() =>{
      window.location.href = "/login"; 
    })
  }

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
              <label htmlFor="recoveryEmail">Correo</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="recoveryEmail"
                  pattern=".+@gmail\.com"
                  placeholder="Ingrese su Correo"
                />
              </div>
              
            </div>
            <div id="recoveryMessage"></div>
              <button type="button" onClick={forgotPassword} className="btn flex">
                <span>Enviar Código</span>
                <AiOutlineSwapRight className="icon" />
              </button>
          </form>
        </div>    
      </div>      
    </div>
  );
}

export default Forgot;