import React from "react";
import Image from 'next/image'
import GeneralCircle from "./atoms/generalCircle";



const PreapprovalSection = props => {
    const { PreapprovalContent} = props
  return (
    <div className="flex flex-col items-center h-screen sm:mb-32 mb-0">
    <div id ="preapproval" className="pr-5 pl-5 sm:pt-20 pt-32 xl:w-1/2 w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="text-white text-white text-2xl sm:text-4xl pb-5 font-semibold">{PreapprovalContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl text-justify">{PreapprovalContent.data.text}</div>
        <div className="self-center">
          <div className="grid grid-cols-2">
            <div className="pr-4">
              <GeneralCircle imageSource={PreapprovalContent.data.icon1.url}
                      imageAlt={PreapprovalContent.data.icon1.alt}
                      text={PreapprovalContent.data.second_text}
                      />
            </div>
            <div className="pl-4">
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