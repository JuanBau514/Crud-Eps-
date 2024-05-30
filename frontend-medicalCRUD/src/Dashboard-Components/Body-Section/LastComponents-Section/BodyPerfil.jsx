import TopEmpty from '../TopEmpty-section/TopEmpty';
import '../body.css';
import { Col, Row } from '@themesberg/react-bootstrap';
import { GeneralInfoForm } from './GeneralInfoForm';
import Profile3 from '../../Assets/NNsoperdido.jpeg';


const BodyPerfil = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
      <GeneralInfoForm />    
      </div>
    </div>
  )
}

export default BodyPerfil;
