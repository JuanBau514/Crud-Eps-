import React from 'react'
import './sidebar.css'

import Logo from '../Assets/logo.png'

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiMedicines } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdEmergency } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={Logo} alt='Image Name' />
        <h2>Logo</h2>
      </div>
      <div className='menuDiv'>
        <h3 className='divTittle'>
          Menu Rapido
        </h3>
        <ul className='menuLists grid'>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>
                Dashboard
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <MdDeliveryDining className='icon' />
              <span className='smallText'>
                Agenda tu cita
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <MdOutlineExplore className='icon' />
              <span className='smallText'>
                Explorar servicios
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <CiCircleCheck className='icon' />
              <span className='smallText'>
                Autoriza tu cita
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <CiSquareQuestion className='icon' />
              <span className='smallText'>
                Solicitudes
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className='settingsDiv'>
        <h3 className='divTittle'>
          Configuraciones
        </h3>
        <ul className='menuList grid'>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <AiOutlinePieChart className='icon' />
              <span className='smallText'>
                Historia clinica
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <GiMedicines className='icon' />
              <span className='smallText'>
                Medicamentos
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <MdFamilyRestroom className='icon' />
              <span className='smallText'>
                Seguimiento familiar
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <MdEmergency className='icon' />
              <span className='smallText'>
                Emergencias
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='' className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className='smallText'>
                Perfil 
              </span>
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar
