import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import img from "../../Assets/image(8).jpg";
import img1 from "../../Assets/image(5).jpg";
import img2 from "../../Assets/image(6).jpg";
import img3 from "../../Assets/image(7).jpg";


function Listening() {
  return (
    <div className="listeningSection">
      <br />
      <div className="heading">
        <br />
        <h1>Especialidades</h1>
        <br />
        <btn className="btn flex">
          mirar todo
          <BsArrowRightShort className="icon" />
        </btn>
        <div className="secContainer flex">
          <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img} alt="Image Name" />
            <h3>Cardiologia</h3>
          </div>
          <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img1} alt="Image Name" />
            <h3>Neurologia</h3>
          </div>
          <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img2} alt="Image Name" />
            <h3>Pediatria</h3>
          </div>
          <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img3} alt="Image Name" />
            <h3>Cirugia General</h3>
          </div>
          <div className="singleItem">
            <AiFillHeart className="icon" />
            <img src={img3} alt="Image Name" />
            <h3>Cirugia General</h3>
          </div>
        </div>
        </div>
        </div>
      
  );
}

export default Listening;
