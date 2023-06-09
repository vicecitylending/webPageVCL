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
        <div className="flex flex-row items-center justify-center  translate-y-32">
          <Image 
            className=""
            src={content.logo2.url}
            alt={content.logo2.alt} 
            width={200}
            height={200}
          />
          <Image 
            className=""
            src={content.logo3.url}
            alt={content.logo3.alt} 
            width={200}
            height={200}
          />
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
        <div className="bg-pink-500 py-4 w-full text-white text-center font-semibold">
          {content.footer_text}
        </div>
      </div>
  );
};

export default Footer;