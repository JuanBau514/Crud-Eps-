import TopEmpty from '../TopEmpty-section/TopEmpty';

import { AuthorizeMedicine } from './AuthorizeMedicine';


const BodyAutorizarMedicamentos = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
      <AuthorizeMedicine />    
      </div>
    </div>
  )
}

export default BodyAutorizarMedicamentos;
