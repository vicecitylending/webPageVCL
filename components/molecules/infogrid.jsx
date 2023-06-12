import React from "react";
import InfoCircle from "../atoms/infocircle";

const InfoGrid = props => {
    const { image, infoCircles } = props
  return (
<div className="relative">
  <div className="grid grid-cols-3">
    <div className="2xl:translate-x-80 sm:translate-x-44 translate-x-7 sm:translate-y-24 translate-y-7">
        <InfoCircle image={image} text={infoCircles.text1}/>
    </div>
    <InfoCircle image={image} text={infoCircles.text2}/>
    <div className="2xl:-translate-x-80 sm:-translate-x-44 -translate-x-7 sm:translate-y-24 translate-y-7">
        <InfoCircle image={image} text={infoCircles.text3}/>
    </div>
    <div className="2xl:translate-x-44 xl:translate-x-10">
      <InfoCircle image={image} text={infoCircles.text4}/>
    </div>
    <div className="2xl:-translate-x-32 xl:-translate-x-10 text-center self-center 2xl:text-2xl sm:text-xl font-bold mb-4 text-white">{infoCircles.text_central}</div>
    <div className="2xl:-translate-x-44 xl:-translate-x-10">
      <InfoCircle image={image} text={infoCircles.text5}/>
    </div>
    <div className="2xl:translate-x-80 sm:translate-x-44 translate-x-7 sm:-translate-y-24 -translate-y-7">
        <InfoCircle image={image} text={infoCircles.text6}/>
    </div>
    <div>
    <InfoCircle image={image} text={infoCircles.text7}/>
    </div>
    <div className="2xl:-translate-x-80 sm:-translate-x-44 -translate-x-7 sm:-translate-y-24 -translate-y-7">
        <InfoCircle image={image} text={infoCircles.text8}/>
    </div>
  </div>
</div>
  );
};

export default InfoGrid;