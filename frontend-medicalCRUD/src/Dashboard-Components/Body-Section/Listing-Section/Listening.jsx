import React from 'react'
import './listening.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

import img from '../../Assets/image(8).jpg'
import img1 from '../../Assets/image(5).jpg'
import img2 from '../../Assets/image(6).jpg'
import img3 from '../../Assets/image(7).jpg'

import doc from '../../Assets/medico6.jpeg'
import doc1 from '../../Assets/medico2.jpg'
import doc2 from '../../Assets/medico4.jpg'
import doc3 from '../../Assets/criko-js.jpeg'
import doc4 from '../../Assets/medico3.jpg'
import doc5 from '../../Assets/cancer.txt-.jpg'
import doc6 from '../../Assets/el mejor asado del mundo.jpeg'
import doc7 from '../../Assets/pingunin.jpeg'
import doc8 from '../../Assets/:O.jpeg'



function Listening() {
    return (
        <div className='listeningSection'>
            <br/>
            <div className="heading">
                <br/>
                <h1>Listening</h1>
                 <br/>
                <btn className="btn flex">
                    mirar todo
                    <BsArrowRightShort className='icon' />
                </btn >
                <div className="secContainer flex">
                    <div className="singleItem">
                        <AiFillHeart className='icon' />
                        <img src={img} alt="Image Name" />
                        <h3>Cardiologia</h3>
                    </div>
                     <div className="singleItem">
                        <AiFillHeart className='icon' />
                        <img src={img1} alt="Image Name" />
                        <h3>Neurologia</h3>
                    </div>
                     <div className="singleItem">
                        <AiFillHeart className='icon' />
                        <img src={img2} alt="Image Name" />
                        <h3>Pediatria</h3>
                    </div>
                     <div className="singleItem">
                        <AiFillHeart className='icon' />
                        <img src={img3} alt="Image Name" />
                        <h3>Cirugia General</h3>
                    </div>
                     
                </div>

                <div className="especialistas flex">
                    <div className="medicos ">
                        <div className="heading flex">
                            <h1>Medicos</h1>
                            <btn className="btn flex">
                                mirar todo
                                <BsArrowRightShort className='icon' />
                            </btn >
                        </div>

                        <div className="card flex">
                            <div className="medicos">
                                <img src={doc} alt="Image Name" />
                                <img src={doc1} alt="Image Name" />
                                <img src={doc2} alt="Image Name" />
                                <img src={doc3} alt="Image Name" />
                                <img src={doc4} alt="Image Name" />
                            </div>
                            <div className="cardText">
                                <span>
                                    Dr MasTurbin <br/>
                                </span>
                                <span className='dataEsp'>
                                     Cardiologo 
                                </span>
                            </div>
                        </div>
                        
                        <div className="card flex">
                            <div className="medicos">
                                <img src={doc} alt="Image Name" />
                                <img src={doc1} alt="Image Name" />
                                <img src={doc7} alt="Image Name" />
                                <img src={doc6} alt="Image Name" />
                                <img src={doc5} alt="Image Name" />
                            </div>
                            <div className="cardText">
                                <span>
                                    Dr MasTurbin <br/>
                                </span>
                                <span className='dataEsp'>
                                     Cardiologo 
                                </span>
                            </div>
                        </div>
                         
                    </div>

                    <div className="medicos ">
                        <div className="heading flex">
                            <h1>Enfermeras</h1>
                            <btn className="btn flex">
                                mirar todo
                                <BsArrowRightShort className='icon' />
                            </btn >
                        </div>

                        <div className="card flex">
                            <div className="medicos">
                                <img src={doc} alt="Image Name" />
                                <img src={doc1} alt="Image Name" />
                                <img src={doc2} alt="Image Name" />
                                <img src={doc3} alt="Image Name" />
                                <img src={doc4} alt="Image Name" />
                            </div>
                            <div className="cardText">
                                <span>
                                    Dr MasTurbin <br/>
                                </span>
                                <span className='dataEsp'>
                                     Cardiologo 
                                </span>
                            </div>
                        </div>
                        
                        <div className="card flex">
                            <div className="medicos">
                                <img src={doc} alt="Image Name" />
                                <img src={doc1} alt="Image Name" />
                                <img src={doc7} alt="Image Name" />
                                <img src={doc6} alt="Image Name" />
                                <img src={doc5} alt="Image Name" />
                            </div>
                            <div className="cardText">
                                <span>
                                    Dr MasTurbin <br/>
                                </span>
                                <span className='dataEsp'>
                                     Cardiologo 
                                </span>
                            </div>
                        </div>
                         
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Listening
