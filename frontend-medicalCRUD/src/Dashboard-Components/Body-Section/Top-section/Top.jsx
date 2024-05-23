import React from 'react'
import './top.css'
import { BiSearch } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoNotificationsCircleOutline } from 'react-icons/io5'

import videoP from '../../Assets/istockphoto-1331888551-640_adpp_is.mp4'
import { CgArrowRight } from "react-icons/cg";
import { BsQuestionCircle } from 'react-icons/bs'
import img2 from '../../Assets/image(7).jpg'

function Top() {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Bienvenido a la eps +Turbin/a</h1>
                    <p>Consulta tus citas, exámenes y resultados de laboratorio</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Buscar'/>
                    <BiSearch className='icon'/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon'/>
                    <IoNotificationsCircleOutline className='icon'/>
                    <div className="adminImage">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="admin"/>
                    </div>
                </div>

            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">
                    <h1>Agenda tu cita</h1>
                    <p>Consulta tus citas, exámenes y resultados de laboratorio</p>

                    <div className="buttons flex">
                        <button className='btn'>
                            <span>Agendar cita</span>
                        </button>
                        <button className='btn transparent'>
                            <span>Ver citas</span>
                        </button>
                    </div>

                    <div className="videoDiv">
                        <video src={videoP} autoPlay loop muted>

                        </video>
                    </div>
            </div>

                <div className="leftCard flex">
                    <div className="main flex" >
                        <div className="textDiv">

                            <h1>Buen dia <span> nombre del paciente</span></h1>
                            
                            <div className="flex">
                                <span>
                                    Hoy <br/> <small>NO tiene citas medicas</small>
                                </span>
                                <span>
                                    Este mes <br/> <small>Tiene una cita el dia 54 de enero</small>
                                </span>
                            </div>

                           
                            <span className="flex link">
                                Ir a mis citas <CgArrowRight className='icon' />
                            </span>
                            

                            
                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="img"/>
                        </div>

{/* Lo pienso usar luego
  <div className='sideBarCard'>
                            <BsQuestionCircle className='icon' />
                            <div className="cardContent">
                            <div className="circule1"> </div>
                            <div className="circule2"> </div>
                            <h3>Centro de Ayuda</h3>
                            <p>¿Necesitas ayuda? Encuentra la respuesta a tus preguntas</p>
                            <button className='btn'>Ir al centro de ayuda</button>
                            </div>
                        </div>
*/}
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top
