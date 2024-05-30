import doc from "../../Assets/medico6.jpeg";
import doc1 from "../../Assets/medico2.jpg";
import doc2 from "../../Assets/medico4.jpg";
import doc3 from "../../Assets/criko-js.jpeg";
import doc4 from "../../Assets/medico3.jpg";
//import "../Listing-Section/listening.css";
import './styles.scss';

export const GeneralInfoForm = () => {
  return (
    <>    
    <div className="listeningSection">            
    <h1>Aaaa</h1>
    <label>Correo</label>
    <input></input>
      <div className="especialistas flex">
        <div className="medicos ">
          <div className="card flex">
            <div className="medicos">
              <img src={doc} alt="Image Name" />
              <img src={doc1} alt="Image Name" />
              <img src={doc2} alt="Image Name" />
              <img src={doc3} alt="Image Name" />
              <img src={doc4} alt="Image Name" />
            </div>
            <div className="cardText">
              <span>
                Dr MasTurbin <br />
              </span>
              <span className="dataEsp">Cardiologo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
