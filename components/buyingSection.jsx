import React from "react";
import GeneralCircle from "./atoms/generalCircle";


const BuyingSection = props => {
  
    const { BuyingRefinancingContent } = props
  return (
  
    <div className="flex flex-col items-center h-full">
    <div id ="buying" className="sm:pr-5 pr-5 sm:pl-5 pl-5 sm:pt-52 pt-32 xl:w-1/2 w-full  sm:mt-52 sm:mb-52">
      <div className="flex flex-col justify-center">
        <div className="text-white text-white text-2xl sm:text-4xl pb-5 font-semibold text-justify">{BuyingRefinancingContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl text-justify">{BuyingRefinancingContent.data.text}</div>
        <div className="self-center">
          <div className="grid grid-cols-2">
            <div className="pr-4">
              <GeneralCircle imageSource={BuyingRefinancingContent.data.icon1.url}
                      imageAlt={BuyingRefinancingContent.data.icon1.alt}
                      text={BuyingRefinancingContent.data.second_text}
                      />
            </div>
            <div className="pl-4">
              <GeneralCircle imageSource={BuyingRefinancingContent.data.icon2.url}
                          imageAlt={BuyingRefinancingContent.data.icon2.alt}
                          text={BuyingRefinancingContent.data.third_text}
                          />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default BuyingSection;