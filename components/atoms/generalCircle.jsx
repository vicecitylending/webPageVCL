import React from "react";
import Image from 'next/image'


const GeneralCircle = props => {
    const { imageSource, imageAlt, text} = props
  return (
        <div className="w-full h-full hover:scale-105 transition duration-500 object-cover">
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
                <div className="text-left  sm:text-2xl text-white break-words text-justify">{text}</div>
              </div>
            </div>
          </div> 
        </div>
  );
};

export default GeneralCircle;