import React from "react";

const InfoCircle = props => {
    const { image, text } = props
  return (
<div className="relative">
  <img src={image.url} alt={image.alt} className="sm:w-80 w-[32rem] h-auto"/>
  <div className="absolute inset-0 flex items-center w-2/4 w-auto ">
    <div className="text-white text-center md:text-xl sm:text-xs text-xs break-words sm:w-3/4 w-3/4 sm:ml-0 ml-4">{text}</div>
  </div>
</div>
  );
};

export default InfoCircle;