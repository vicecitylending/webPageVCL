import React from "react";
import InfoCircle from "./infocircle";
import { ParallaxTilt } from 'react-parallax-tilt';

const ParallaxInfoGrid = props => {
  const { image, infoCircles } = props;

  return (
    <div className="relative">
      <div className="grid grid-cols-3">
        <div className="translate-x-7 translate-y-7">
          <ParallaxTilt>
            <InfoCircle image={image} text={infoCircles.text1} />
          </ParallaxTilt>
        </div>
        <ParallaxTilt>
          <InfoCircle image={image} text={infoCircles.text2} />
        </ParallaxTilt>
        <div className="-translate-x-7 translate-y-7">
          <ParallaxTilt>
            <InfoCircle image={image} text={infoCircles.text3} />
          </ParallaxTilt>
        </div>
        <ParallaxTilt>
          <InfoCircle image={image} text={infoCircles.text4} />
        </ParallaxTilt>
        <div className="text-center self-center text-2xl font-bold mb-4 text-white">
          {infoCircles.text_central}
        </div>
        <ParallaxTilt>
          <InfoCircle image={image} text={infoCircles.text5} />
        </ParallaxTilt>
        <div className="translate-x-7 -translate-y-7">
          <ParallaxTilt>
            <InfoCircle image={image} text={infoCircles.text6} />
          </ParallaxTilt>
        </div>
        <ParallaxTilt>
          <InfoCircle image={image} text={infoCircles.text7} />
        </ParallaxTilt>
        <div className="-translate-x-7 -translate-y-7">
          <ParallaxTilt>
            <InfoCircle image={image} text={infoCircles.text8} />
          </ParallaxTilt>
        </div>
      </div>
    </div>
  );
};

export default ParallaxInfoGrid;