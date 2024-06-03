import TopEmpty from '../TopEmpty-section/TopEmpty';

import { MedicHistory } from './MedicHistory';


const BodyHistorialMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
      <MedicHistory />    
      </div>
    </div>
  )
}

export default BodyHistorialMedico;
