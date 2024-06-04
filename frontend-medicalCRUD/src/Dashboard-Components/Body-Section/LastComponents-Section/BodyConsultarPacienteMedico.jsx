import TopEmpty from '../TopEmpty-section/TopEmpty';
import { ConsultPatient } from './ConsultPatient';

const BodyConsultarPacienteMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
         <ConsultPatient/>
      </div>
    </div>
  )
}

export default BodyConsultarPacienteMedico;
