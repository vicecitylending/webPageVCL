import React from "react";
import InfoCircle from "../atoms/infocircle";

const InfoGrid = props => {
    const { image, infoCircles } = props
  return (
<div className="relative">
  <div className="grid grid-cols-3">
    <div className="translate-x-7 translate-y-7">
        <InfoCircle image={image} text={infoCircles.text1}/>
    </div>
    <InfoCircle image={image} text={infoCircles.text2}/>
    <div className="-translate-x-7 translate-y-7">
        <InfoCircle image={image} text={infoCircles.text3}/>
    </div>
    <InfoCircle image={image} text={infoCircles.text4}/>
    <div className="text-center self-center text-2xl font-bold mb-4 text-white">{infoCircles.text_central}</div>
    <InfoCircle image={image} text={infoCircles.text5}/>
    <div className="translate-x-7 -translate-y-7">
        <InfoCircle image={image} text={infoCircles.text6}/>
    </div>
    <InfoCircle image={image} text={infoCircles.text7}/>
    <div className="-translate-x-7 -translate-y-7">
        <InfoCircle image={image} text={infoCircles.text8}/>
    </div>
  </div>
</div>
  );
};

export default InfoGrid;