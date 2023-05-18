import React from "react";
import "./Reasons.css";
import image1 from "../../../public/assets/image1.png";
import image2 from "../../../public/assets/image2.png";
import image3 from "../../../public/assets/image3.png";
import image4 from "../../../public/assets/image4.png";
import nb from "../../../public/assets/nb.png";
import adidas from "../../../public/assets/adidas.png";
import nike from "../../../public/assets/nike.png";
import tick from "../../../public/assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-reasons">
        <img src={image1} alt="/" />
        <img src={image2} alt="/" />
        <img src={image3} alt="/" />
        <img src={image4} alt="/" />
      </div>
      <div className="right-reasons">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-right">
          {/* reasons */}
          <div>
            <img src={tick} alt="/"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="/" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="/" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="/" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        {/* partners */}
        <span className="partners-title">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="/" />
          <img src={adidas} alt="/" />
          <img src={nike} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
