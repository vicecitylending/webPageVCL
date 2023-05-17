import * as React from "react";

const Footer = (props) => {
  const { content } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex flex-row items-center justify-center text-white font-semibold w-full sm:translate-y-60 translate-y-36">
        <div>{content.email}</div>
        <div className="pl-2 pr-2">|</div>
        <div>{content.instagram}</div>
      </div>
      <div className="flex flex-row items-center justify-center w-full sm:translate-y-60 translate-y-36">
        <img src={content.logo2.url} alt={content.logo2.alt} className="sm:translate-x-58 translate-x-28 scale-50 sm:scale-80" />
        <img src={content.logo3.url} alt={content.logo3.alt} className="sm:translate-x-28 -translate-x-20 translate-y-2 scale-50 sm:scale-80"/>
      </div>
        <img src={content.logo.url} alt={content.logo.alt} className="logo-footer" />
        <img src={content.team.url} alt={content.team.alt} className="" />
      <div className="relative bg-pink-500 py-4 w-full text-white text-center font-semibold">
        INTEGRITY | SPEED |  EFFICIENCY
      </div>
    </div>
  );
};

export default Footer;