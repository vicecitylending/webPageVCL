import React from "react";
import Image from 'next/image'


const LoanCircle = props => {
    const { imageSource, imageAlt, title, description } = props

    console.log(title)
  return (
<div className="w-full h-full">
  <div className="flex flex-row">
    <div>
      <Image  className="sm:scale-100 scale-110 sm:w-80 w-[32rem] h-auto"
                                src={imageSource}
                                alt={imageAlt} 
                                width={200}
                                height={200}
                        />
    </div>
    <div className="items-center w-auto">
      <div className="">
        <div className="text-left text-white text-sm break-words font-bold">{title}</div>
        <div className="text-left  text-white text-xs break-words xl:w-1/4 w-1/2 ">{description}</div>
      </div>
    </div>
  </div> 
</div>
  );
};

export default LoanCircle;