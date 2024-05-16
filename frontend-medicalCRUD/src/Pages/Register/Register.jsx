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
      title: "Ingrese Sus Datos",
      html: `
      <strong><label>Nombres</label></strong>
      <input class="swal2-input" id="nombres" type="text" placeholder="Digite sus Nombres" /><br />
      <strong><label>Apellidos</label></strong>
      <input class="swal2-input" id="apellidos" type="text" placeholder="Digite sus Apellidos" /><br />            
      <strong><label>Nacimiento</label></strong>
      <input class="swal2-input" id="fecha_naci" type="date" placeholder="Digite la Fecha" min="1914-01-01"/>
      <br /> 
      <strong><label>Lugar Nacimiento</label></strong>
      <select class="swal2-input" id="lugar_naci">
        <option value="-1">Seleccione una opción</option>
        <option value="0">Bogota</option>
        <option value="1">Medellin</option>
        <option value="2">Cali</option>
      </select>
      <br/>
      <strong><label>Direccion Residencia</label></strong>
      <input class="swal2-input" id="direccion_re" type="text" placeholder="Digite la direccion de residencia" />
      <br/>
      <strong><label>Detalles Direccion</label></strong>
      <input class="swal2-input" id="direccion_cor" type="text" placeholder="Digite alguna descripcion de su casa" />
      <br/>
      <strong><label>Estrato</label></strong>      
      <input class="swal2-input" id="estrato" type="number" placeholder="Digite su Estrato" />
      <strong><label>Ciudad Residencia</label></strong>
      <select class="swal2-input" id="ciudad_resi">
        <option value="-1">Seleccione una opción</option>
        <option value="0">Bogota</option>
        <option value="1">Medellin</option>
        <option value="2">Cali</option>
      </select>
      <strong><label>Ciudad Afiliacion</label></strong>
      <select class="swal2-input" id="ciudad_afili">
        <option value="-1">Seleccione una opción</option>
        <option value="0">Bogota</option>
        <option value="1">Medellin</option>
        <option value="2">Cali</option>
      </select>
          `,      
      showCancelButton: true,
      cancelButtonColor: 'grey',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      preConfirm: () => ({
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        fecha_naci: document.getElementById('fecha_naci').value,     
        lugar_naci: document.getElementById('lugar_naci').value,      
        direccion_re: document.getElementById('direccion_re').value,
        direccion_cor: document.getElementById('direccion_cor').value,       
        estrato: document.getElementById('estrato').value,      
        ciudad_resi: document.getElementById('ciudad_resi').value,
        ciudad_afili: document.getElementById('ciudad_afili').value
      })
    }).then((result) =>{
      const { nombres, apellidos, fecha_naci, lugar_naci, direccion_re, direccion_cor, estrato, ciudad_resi, ciudad_afili} = result.value;
      console.log("Nombres:", nombres);
      console.log("Apellidos:", apellidos);
      console.log("Nacimiento:", fecha_naci);
      console.log("Lugar Naci:", lugar_naci);
      console.log("Direccion Re:", direccion_re);
      console.log("Detalles Direccion:", direccion_cor);
      console.log("Estrato:", estrato);
      console.log("Ciudad Resi:", ciudad_resi);
      console.log("Ciudad Afili:", ciudad_afili);
      window.location.href = "/register"; 
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
