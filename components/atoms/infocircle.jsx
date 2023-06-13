import React from "react";
import Image from 'next/image'


const InfoCircle = props => {
    const { image, text } = props
  return (
<div className="relative">
  <Image  className="sm:scale-100 scale-125 sm:w-80 w-auto h-auto"
                            src={image.url}
                            alt={image.alt} 
                            width={200}
                            height={200}
                    />
  <div className="absolute inset-0 flex items-center w-auto">
    <div className="2xl:ml-10 xl:ml-20 md:ml-20 lg:ml-24 sm:ml-7 circle-text-ml text-white text-center xl:text-xl lg:text-xl md:text-xl sm:text-xs text-xs md:w-2/5 w-3/4">{text}</div>
  </div>
</div>
  );
};

export default InfoCircle;