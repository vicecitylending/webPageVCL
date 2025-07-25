import React from "react";
import InfoCircle from "../atoms/infocircle";

const InfoGrid = props => {
    const { image, infoCircles } = props
  return (
<div className="relative">
  <div className="grid grid-cols-3">
    <div className="3xl:translate-x-96 2xl:translate-x-80 xl:translate-x-64 lg:translate-x-48 md:translate-x-32 sm:translate-x-20 translate-x-12 xl:translate-y-24 sm:translate-y-12 lg:translate-y-20 md:translate-y-18 translate-y-3">
        <InfoCircle image={image} text={infoCircles?.text1 || ""}/>
    </div>
    <div className="sm:translate-y-0 -translate-y-7">
      {/* <InfoCircle image={image} text={infoCircles?.text2 || ""}/> */}
    </div>
    <div className="3xl:-translate-x-96 2xl:-translate-x-80 lg:-translate-x-48 md:-translate-x-32 xl:-translate-x-64 sm:-translate-x-20 -translate-x-12 xl:translate-y-24 sm:translate-y-12 lg:translate-y-20 md:translate-y-18 translate-y-3">
        <InfoCircle image={image} text={infoCircles?.text2 || ""}/>
    </div>
    <div className="3xl:translate-x-48 2xl:translate-x-52 xl:translate-x-40 lg:translate-x-20 sm:translate-x-0 -translate-x-4">
      <InfoCircle image={image} text={infoCircles?.text4 || ""}/>
    </div>
    <div className="3xl:-translate-x-32 2xl:-translate-x-24 xl:-translate-x-10 lg:-translate-x-5 text-center self-center 3xl:text-4xl 2xl:text-4xl sm:text-xl font-bold mb-4 text-white">{infoCircles?.text_central || ""}</div>
    <div className="3xl:-translate-x-48 2xl:-translate-x-52 xl:-translate-x-40 lg:-translate-x-20 sm:translate-x-0 translate-x-4">
      <InfoCircle image={image} text={infoCircles?.text5 || ""}/>
    </div>
    <div className="3xl:translate-x-96 2xl:translate-x-80  lg:translate-x-48 md:translate-x-32 xl:translate-x-64 sm:translate-x-20 translate-x-12 xl:-translate-y-24 sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-18 -translate-y-3">
        <InfoCircle image={image} text={infoCircles?.text6 || ""}/>
    </div>
    <div>
      <div className="sm:translate-y-0 translate-y-7">
        {/* <InfoCircle image={image} text={infoCircles?.text7 || ""}/> */}
      </div>
    </div>
    <div className="3xl:-translate-x-96 2xl:-translate-x-80 lg:-translate-x-48 md:-translate-x-32 xl:-translate-x-64 sm:-translate-x-20 -translate-x-12 xl:-translate-y-24 sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-18 -translate-y-3">
        <InfoCircle image={image} text={infoCircles?.text7 || ""}/>
    </div>
  </div>
</div>
  );
};

export default InfoGrid;