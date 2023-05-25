import React from "react";
import Image from 'next/image'


const InfoCircle = props => {
    const { image, text } = props
  return (
<div className="relative">
  <Image  className="sm:w-80 w-[32rem] h-auto"
                            src={image.url}
                            alt={image.alt} 
                            width={200}
                            height={200}
                    />
  <div className="absolute inset-0 flex items-center w-2/4 w-auto ">
    <div className="circle-text-ml text-white text-center md:text-xl sm:text-xs text-xs break-words sm:w-2/5 w-3/4">{text}</div>
  </div>
</div>
  );
};

export default InfoCircle;