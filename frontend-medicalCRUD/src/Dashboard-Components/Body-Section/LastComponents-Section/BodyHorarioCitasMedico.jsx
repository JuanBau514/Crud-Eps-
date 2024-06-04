import TopEmpty from '../TopEmpty-section/TopEmpty';
import { ScheduleAppointment } from './ScheduleAppointment';

const BodyHorarioCitasMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
         <ScheduleAppointment/>
      </div>
    </div>
  )
}

export default BodyHorarioCitasMedico;
