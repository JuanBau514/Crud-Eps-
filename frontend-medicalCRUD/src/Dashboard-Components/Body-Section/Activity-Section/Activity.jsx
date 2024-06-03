import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'
import useImg from '../../Assets/medico-masturbin.jpeg'

function Activity() {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Actividad</h1>
                <button className='btn flex'>
                    Mirar todo
                    <BsArrowRightShort className='icon'/>

                </button>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div><div className="singleCustomer flex">
                    <img src={useImg} alt="Customer Image" />
                    <div className="customerDetails">
                        <small className='name'>Añañin</small>
                        <small>Empleado del gobierno</small>
                    </div>
                    <div className="duration">
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
