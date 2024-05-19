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

const registerUser = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  const registerMessage = document.getElementById('registerMessage');
  
  if (password !== password2) {
    registerMessage.textContent = "Las contraseñas no coinciden.";
    registerMessage.style.color = "red";
    return;
  }

  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
      if (!response.ok) {
          throw response;
      }
      return response.text();
  })
  .then(data => {
      registerMessage.textContent = data; // Muestra mensaje de éxito
      registerMessage.style.color = 'green'; // verde = exito
      setTimeout(() => { //el redireccionador
        window.location.href = "/login"; //
      }, 3000); // Redirecciona después de 5 segundos
  })
  .catch(error => {
      error.text().then(errorMessage => {
          console.error('Error:', errorMessage);
          registerMessage.textContent = errorMessage; // Muestra mensaje de error
          registerMessage.style.color = 'red'; //SIGNIFICA PELIGRO
      });
  });
}

function Register() {
    
  /*const showSwal = () => {
    withReactContent(Swal).fire({
      title: "El código ha sido enviado",
      text: "Por favor revise su correo para Continuar con el Registro",
      icon: "success"
    }).then(() =>{
      window.location.href = "/login"; 
    })
  }*/

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
                  id="email"
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
              <label htmlFor="password2">Verifica la Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password2"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                  placeholder="Ingrese la Contraseña Nuevamente"
                />
              </div>
            </div>
            <div id="registerMessage"></div>
            <button type="button" onClick={registerUser} className="btn flex">
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
