import * as React from "react";
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'


const Footer = (props) => {
  const { content } = props;
  
  return (
      <div className="flex flex-col items-center w-full mt-auto">
        <Image 
          className="mb-10 mt-10 hover:scale-110 transition duration-500 object-cover"
          src={content.logo_no_background.url}
          alt={content.logo_no_background.alt} 
          width={300}
          height={300}
        />
        <div className="flex flex-row justify-center text-white font-semibold mt-5 hover:scale-110 transition duration-500 cursor-pointer object-cover">
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="flex flex-row justify-center text-white font-semibold mt-5">
          <a href={`${content.instagram_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
                className="mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.instagram_logo.url}
                alt={content.instagram_logo.alt} 
                width={50}
                height={50}
              />
          </a>
          <a href={`${content.facebook_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.facebook_logo.url}
              alt={content.facebook_logo.alt} 
              width={50}
              height={50}
            />
          </a>
          <a href={`${content.tiktok_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.tiktok_logo.url}
              alt={content.tiktok_logo.alt} 
              width={50}
              height={50}
            />
          </a>
          <a href={`${content.youtube_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.youtube_logo.url}
              alt={content.youtube_logo.alt} 
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="bg-pink-400 py-4 w-full text-white text-center font-semibold mt-20">
          {content.footer_text}
        </div>
      </div>
  );
};

export default Footer;