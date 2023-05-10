import * as React from "react";

const Footer = (props) => {
  const { content } = props;
  console.log(content)

  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="flex items-center justify-center space-x-4 text-white font-semibold">
        <p>{content.email}</p>
        <p>|</p>
        <p>{content.instagram}</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
      <img src={content.logo2.url} alt={content.logo2.alt} className="mt-4 scale-50 translate-x-60" />
      <img src={content.logo3.url} alt={content.logo3.alt} className="mt-4 scale-50" />
      </div>
      <img src={content.logo.url} alt={content.logo.alt} className="mt-4 logo-footer" />
      <img src={content.team.url} alt={content.team.alt} className="mt-4" />
      <div className="bg-pink-500 py-4 w-full text-white text-center font-semibold">
        INTEGRITY | SPEED |  EFFICIENCY
      </div>
    </div>
  );
};

export default Footer;