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

const errorSweet = withReactContent(Swal);

const forgotPassword = () => {
  const email = document.getElementById('recoveryEmail').value;

  fetch('/api/recover', {
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
      errorSweet.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Por favor revise su correo para restablecer la contraseña',
          showConfirmButton: true,
          timer: 3000 // La alerta se cerrará automáticamente después de 3 segundos
      }).then(() => {
          window.location.href = "/login"; // Redirecciona después de cerrar la alerta
      });
  })
  .catch(error => {
      error.text().then(errorMessage => {
          console.error('Error:', errorMessage);
          errorSweet.fire({
              icon: 'error',
              title: 'Error',
              text: errorMessage
          });
      });
  });
}

function Forgot() {

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