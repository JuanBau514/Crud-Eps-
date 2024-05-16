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

function RegisterToken() {
    
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Exito!",
      text: "Usuario Registrado Exitosamente",
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
                  <option value="2">Medellin</option>
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
                  placeholder="Ingrese sus dirección de correspondencia"
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
                  <option value="2">Medellin</option>
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
                  <option value="2">Medellin</option>
                  <option value="3">Cali</option>
                </select>
              </div>
            </div>

            <button type="button" onClick={showSwal} className="btn flex">
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
