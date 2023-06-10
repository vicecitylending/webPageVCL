import React from "react";
import Image from 'next/image'


const LoansSection = props => {
    const { RealtorsContent } = props
    console.log(RealtorsContent)
  return (
    <div className="flex flex-col items-center h-screen sm:mb-32 mb-0">
    <div id ="loan" className="pr-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="text-white text-white text-2xl sm:text-4xl pb-5 font-semibold">{RealtorsContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl">{RealtorsContent.data.text}</div>
        <div className="self-center">
          {/* <div className="flex">
            <div className="pt-10 sm:pr-32 pr-5">
              <Image  className=""
                      src={RealtorsContent.data.loan1_icon.url}
                      alt={RealtorsContent.data.loan1_icon.alt} 
                      width={200}
                      height={200}
                />
            </div>
            <div className="pt-10 sm:pl-32 pl-5">
              <Image  className=""
                      src={RealtorsContent.data.loan2_icon.url}
                      alt={RealtorsContent.data.loan2_icon.alt} 
                      width={200}
                      height={200}
                />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>

  );
};

export default LoansSection;