import React from "react";
import Image from 'next/image'


const HomeSection = props => {
    const { generalInformation } = props
  return (
    <div className="w-full h-screen place-items-center justify-items-stretch">
    <div id="start" className="w-full flex flex-col md:flex-row text-white place-items-center justify-items-stretch 2xl:mt-44 xl:translate-y-64 translate-y-44">
        <div className="basis-1/3 flex flex-col items-center text-center">
          <div className="font-semibold text-2xl sm:text-4xl">{generalInformation.we_work_text}</div>
          <div className="font-semibold text-2xl sm:text-4xl">{generalInformation.twentyfourseven_text}</div>
        </div>
        <div className="basis-1/3 flex items-center justify-center">
          <Image  className=""
                  src={generalInformation.small_logo.url}
                  alt={generalInformation.small_logo.alt} 
                  width={290}
                  height={290}
                  priority={true}
          />
        </div>
        <div className="basis-1/3 flex flex-col items-center justify-center text-center">
          <div className="text-xs sm:text-xl">{generalInformation.powered_text}</div>
          <div className="text-xl sm:text-4xl font-semibold">{generalInformation.dadeland_text}</div>
          <div className="text-xl sm:text-4xl">{generalInformation.difference_text}</div>
      </div>
    </div>
  </div>

  );
};

export default HomeSection;