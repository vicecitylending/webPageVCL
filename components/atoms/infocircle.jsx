import React from "react";

const InfoCircle = props => {
    const { image, text } = props
  return (
<div className="relative ">
  <img src={image.url} alt={image.alt} className="w-96 h-auto rounded-full"/>
  <div className="absolute inset-0 flex items-center w-2/4 ">
    <div className="text-white text-center md:text-xl sm:text-xs text-xs font-bold break-words max-w-full max-h-full">{text}</div>
  </div>
</div>
  );
};

export default InfoCircle;