import TopEmpty from '../TopEmpty-section/TopEmpty';
import { AppointmentReport } from './AppointmentReport';

const BodyReportesCitas = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
         <AppointmentReport />
      </div>
    </div>
  )
}

export default BodyReportesCitas;
