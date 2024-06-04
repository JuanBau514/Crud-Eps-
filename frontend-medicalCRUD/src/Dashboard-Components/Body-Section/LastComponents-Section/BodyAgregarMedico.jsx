import TopEmpty from '../TopEmpty-section/TopEmpty';
import { AddDoctor } from './AddDoctor';

const BodyAgregarMedico = () => {
  return (
    <div className='mainContent'>
      <TopEmpty/>
      <br/><br/>
      <div className='="bottom flex'>                
         <AddDoctor/>
      </div>
    </div>
  )
}

export default BodyAgregarMedico;
