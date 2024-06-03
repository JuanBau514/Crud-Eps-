import '../Top-section/top.css';
import { BiSearch } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoNotificationsCircleOutline } from 'react-icons/io5'

function TopEmpty() {
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
        </div>
    )
}

export default TopEmpty;
