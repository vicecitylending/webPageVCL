import React from "react";
import Image from 'next/image'


const HomeSection = props => {
    const { generalInformation } = props
  return (
    <div className="w-full h-screen place-items-center justify-items-stretch">
    <div id="start" className="w-full flex flex-col text-white place-items-center justify-items-stretch 3xl:mt-64 2xl:mt-60 lg:mt-64 xs:mt-48">
        <div className="basis-1/3 flex items-center justify-center">
          <Image  className="lg:scale-125 hover:scale-150 transition duration-500 object-cover"
                  src={generalInformation.small_logo.url}
                  alt={generalInformation.small_logo.alt} 
                  width={290}
                  height={290}
                  priority={true}
          />
        </div>
        <div className="basis-1/3 flex flex-col items-center text-center mt-10">
          <div className="font-semibold text-2xl">{generalInformation.we_work_text}</div>
          <div className="font-semibold text-2xl">{generalInformation.twentyfourseven_text}</div>
        </div>
    </div>
  </div>

  );
};

export default HomeSection;