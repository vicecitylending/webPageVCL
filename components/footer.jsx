import * as React from "react";
import Image from 'next/image'


const Footer = (props) => {
  const { content } = props;

  return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center text-white font-semibold translate-y-32">
          <div>{content.email}</div>
          <div className="pl-2 pr-2">|</div>
          <div>{content.instagram}</div>
        </div>
        <Image 
          className="translate-y-32"
          src={content.logo.url}
          alt={content.logo.alt} 
          width={300}
          height={300}
        />
        <Image 
          className=""
          src={content.team.url}
          alt={content.team.alt} 
          width={400}
          height={400}
        />
        <div className="bg-pink-400 py-4 w-full text-white text-center font-semibold">
          {content.footer_text}
        </div>
      </div>
  );
};

export default Footer;