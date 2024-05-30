import TopEmpty from '../TopEmpty-section/TopEmpty';

import { ConsultAppointment } from './ConsultAppointment';


const BodyConsultarCitas = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
      <ConsultAppointment />    
      </div>
    </div>
  )
}

export default BodyConsultarCitas;
