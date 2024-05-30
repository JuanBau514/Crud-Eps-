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

        {/* <Col xs={12} xl={4}>
        <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              />
            </Col>
          </Row>
        </Col> */}      
      </div>
    </div>
  )
}

export default BodyPerfil;
