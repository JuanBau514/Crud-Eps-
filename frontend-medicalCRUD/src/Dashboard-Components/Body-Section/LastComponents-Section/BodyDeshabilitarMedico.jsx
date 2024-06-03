import TopEmpty from '../TopEmpty-section/TopEmpty';
import { DisableDoctor } from './DisableDoctor';

const BodyDeshabilitarMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
         <DisableDoctor />
      </div>
    </div>
  )
}

export default BodyDeshabilitarMedico;
