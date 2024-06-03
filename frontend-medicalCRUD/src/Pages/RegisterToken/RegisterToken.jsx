//IMPORT ASSETS
import video from "../../LogginAssets/video.mp4";

//IMPORT ICONS
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { FaArrowsUpDown } from "react-icons/fa6";


//IMPORT SWEET ALERT
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const errorSweet = withReactContent(Swal);

const registerP = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const token = urlParams.get("token");

  const paciente = {
    nombres: document.getElementById("nombres").value,
    apellidos: document.getElementById("apellidos").value,
    fecha_naci: document.getElementById("fecha_naci").value,
    lugar_naci: parseInt(document.getElementById("lugar_naci").value),
    direccion_re: document.getElementById("direccion_re").value,
    direccion_cor: document.getElementById("direccion_cor").value,
    estrato: parseInt(document.getElementById("estrato").value),
    ciudad_resi: parseInt(document.getElementById("ciudad_resi").value),
    ciudad_afili: parseInt(document.getElementById("ciudad_afili").value),
    id_usuario: userId
  };

  const messageElement = document.getElementById("message"); // para que esta vaina godo ?

  fetch("/api/registerP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
      paciente: paciente
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.text();
    })
   .then((data) => {
       errorSweet.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: data,
        showConfirmButton: true,
        timer: 3000 // La alerta se cerrará automáticamente después de 3 segundos
      }).then(() => {
        window.location.href = "/"; // Redirecciona después de cerrar la alerta
      });
    }) 
    .catch((error) => {
      if (error instanceof Response) {
        error.text().then((errorMessage) => {
          console.error("Error:", errorMessage);
          errorSweet.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage
          });
        });
      } else {
          console.error("Error:", error);
          errorSweet.fire({
          icon: 'error',
          title: 'Error',
          text: "Error al procesar la solicitud."
        });
      }
    });

}

function RegisterToken() {

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">EPS Salud +</h2>
            <p>Tu salud nuestra preocupación</p>
          </div>
        </div>
        <div className="formDiv flex">
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="nombres">Nombres</label>
              <div className="input flex">
                <MdDriveFileRenameOutline className="icon" />
                <input
                  type="text"
                  id="nombres"
                  placeholder="Ingrese sus nombres"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="apellidos">Apellidos</label>
              <div className="input flex">
                <MdDriveFileRenameOutline className="icon" />
                <input
                  type="text"
                  id="apellidos"
                  placeholder="Ingrese sus apellidos"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="fecha_naci">Fecha de Nacimiento</label>
              <div className="input flex">
                <input
                  type="date"
                  id="fecha_naci"
                  placeholder=""
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="lugar_naci">Lugar de Nacimiento</label>
              <div className="input flex">
                <CiCalendarDate className="icon" />
                <select id="lugar_naci">
                  <option value="1">Bogotá</option>
                  <option value="2">Medellín</option>
                  <option value="3">Cali</option>
                </select>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="direccion_re">Dirección de Residencia</label>
              <div className="input flex">
                <FaHome className="icon" />
                <input
                  type="text"
                  id="direccion_re"
                  placeholder="Ingrese su dirección de residencia"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="direccion_cor">Dirección Correspondencia</label>
              <div className="input flex">
                <MdApartment className="icon" />
                <input
                  type="text"
                  id="direccion_cor"
                  placeholder="Ingrese su dirección de correspondencia"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="estrato">Estrato</label>
              <div className="input flex">
                <FaArrowsUpDown className="icon" />
                <input
                  type="number"
                  id="estrato"
                  min="0"
                  max="6"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="ciudad_resi">Ciudad de Residencia</label>
              <div className="input flex">
                <CiCalendarDate className="icon" />
                <select id="ciudad_resi">
                  <option value="1">Bogotá</option>
                  <option value="2">Medellín</option>
                  <option value="3">Cali</option>
                </select>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="ciudad_afili">Ciudad de Afiliación</label>
              <div className="input flex">
                <CiCalendarDate className="icon" />
                <select id="ciudad_afili">
                  <option value="1">Bogotá</option>
                  <option value="2">Medellín</option>
                  <option value="3">Cali</option>
                </select>
              </div>
            </div>
            <div id="message"></div>
            <button type="button" onClick={registerP} className="btn flex">
              <span>Registrar</span>
              <AiOutlineSwapRight className="icon" />
            </button>                        
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterToken;
