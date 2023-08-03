import * as React from "react";
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'


const Footer = (props) => {
  const { content } = props;
  
  return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center text-white font-semibold translate-y-32">
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="flex flex-row justify-center text-white font-semibold translate-y-32">
          <PrismicNextLink href={`${content.instagram_link.url}`}>
            <Image 
                className="mt-5 mr-1 ml-1"
                src={content.instagram_logo.url}
                alt={content.instagram_logo.alt} 
                width={50}
                height={50}
              />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.facebook_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1"
              src={content.facebook_logo.url}
              alt={content.facebook_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.tiktok_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1"
              src={content.tiktok_logo.url}
              alt={content.tiktok_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.youtube_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1"
              src={content.youtube_logo.url}
              alt={content.youtube_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
        </div>
        <Image 
          className="mt-32 translate-y-32"
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