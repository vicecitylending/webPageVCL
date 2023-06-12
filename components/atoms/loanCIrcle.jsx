import React from "react";
import Image from 'next/image'


const LoanCircle = props => {
    const { imageSource, imageAlt, title, description } = props
  return (
        <div className="w-full h-full">
          <div className="flex flex-col">
            <div className="w-auto h-auto">
              <Image  className=""
                      src={imageSource}
                      alt={imageAlt} 
                      width={700}
                      height={700}
              />
            </div>
            <div className="items-center w-auto">
              <div className="">
                <div className="text-left text-white text-sm break-words font-bold">{title}</div>
                <div className="text-left  text-white text-xs break-words ">{description}</div>
              </div>
            </div>
          </div> 
        </div>
  );
};

export default LoanCircle;