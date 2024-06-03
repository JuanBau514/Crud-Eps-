import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiMedicines, GiPlagueDoctorProfile  } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import "../../Pages/Dashboard/dashboard.css";
import "./sidebarAD.css";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={Logo} alt="Image Name" />
        <h2>Logo</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTittle">Menu Rapido</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to={'/dashboardAdmin'}>
            <a href="" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"/agregarMedico"}>
              <a href="" className="menuLink flex">
                <IoPersonAdd className="icon" />
                <span className="smallText">Agregar Medico</span>
              </a>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"/deshabilitarMedico"}>
            <a href="" className="menuLink flex">
              <GiPlagueDoctorProfile className="icon" />
              <span className="smallText">Deshabilitar Medico</span>
            </a>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"/reportesCitas"}>
            <a href="" className="menuLink flex">
              <HiOutlineDocumentReport className="icon" />
              <span className="smallText">Reportes de Citas</span>
            </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="menuDiv">
        <h3 className="divTittle">Configuracion</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to={"/perfil"}>
              <a href="" className="menuLink flex">
                <MdOutlinePermContactCalendar className="icon" />
                <span className="smallText">Ver perfil</span>
              </a>
            </Link>
          </li>

          <li className="listItem">
            <Link to={'/historialCitas'}>
            <a href="" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">Historial de citas</span>
            </a>
            </Link>
          </li>         

          <li className="listItem">
            <Link to={'/historialMedico'}>
            <a href="" className="menuLink flex">
              <MdFamilyRestroom className="icon" />
              <span className="smallText">Historial Medico</span>
            </a>
            </Link>
          </li>

          <li className="listItem">
            <Link to={'/consultarCitas'}>
            <a href="" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Consultar citas</span>
            </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circule1"> </div>
          <div className="circule2"> </div>
          <h3>Centro de Ayuda</h3>
          <p>¿Necesitas ayuda? Encuentra la respuesta a tus preguntas</p>
          <button className="btn">Ir al centro de ayuda</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
