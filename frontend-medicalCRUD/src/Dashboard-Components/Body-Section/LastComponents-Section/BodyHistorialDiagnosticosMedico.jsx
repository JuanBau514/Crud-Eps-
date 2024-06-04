import TopEmpty from '../TopEmpty-section/TopEmpty';

import { AppointmentHistory } from './AppointmentHistory';


const BodyHistorialDiagnosticosMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
      <AppointmentHistory/>
      </div>
    </div>
  )
}

export default BodyHistorialDiagnosticosMedico;
