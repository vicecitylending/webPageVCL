import React from "react";
import Image from 'next/image'
import GeneralCircle from "./atoms/generalCircle";



const PreapprovalSection = props => {
    const { PreapprovalContent} = props
  return (
    <div className="flex flex-col items-center h-screen sm:mb-32 mb-0">
    <div id ="preapproval" className="pr-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="text-white text-white text-2xl sm:text-4xl pb-5 font-semibold">{PreapprovalContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl">{PreapprovalContent.data.text}</div>
        <div className="self-center">
          <div className="flex">
            {/* <div className="pt-10 sm:pr-32 pr-5">
              <Image  className=""
                      src={PreapprovalContent.data.icon1.url}
                      alt={PreapprovalContent.data.icon1.alt} 
                      width={400}
                      height={400}
                />
            </div>
            <div className="pt-10 sm:pl-32 pl-5 2xl:mt-8 xl:mt-5 mt-3">
              <Image  className=""
                      src={PreapprovalContent.data.icon2.url}
                      alt={PreapprovalContent.data.icon2.alt} 
                      width={350}
                      height={350}
                />
            </div> */}

            <div className="pr-2">
              <GeneralCircle imageSource={PreapprovalContent.data.icon1.url}
                      imageAlt={PreapprovalContent.data.icon1.alt}
                      text={PreapprovalContent.data.second_text}
                      />
            </div>
            <div className="pr-2">
              <GeneralCircle imageSource={PreapprovalContent.data.icon2.url}
                          imageAlt={PreapprovalContent.data.icon2.alt}
                          text={PreapprovalContent.data.third_text}
                          />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PreapprovalSection;