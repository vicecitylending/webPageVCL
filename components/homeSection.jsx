import * as React from "react";
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'


const HomeSection = props => {
  const { content } = props;


  const redirectToCalendly = () => {
    // Redirigir a Calendly.com
    window.location.href = 'https://www.calendly.com/vicecitylending';
  };
  
  return (
      <div className="flex flex-col items-center min-h-screen">
        <Image 
          className="mb-10 translate-y-32 hover:scale-110 transition duration-500 object-cover"
          src={content.logo.url}
          alt={content.logo.alt} 
          width={300}
          height={300}
        />

      <div className="flex mt-28">
      <a href='https://www.calendly.com/vicecitylending' target="_blank" rel="noopener noreferrer">
        <button
          id="submitButton"
          className="bg-orange-400 text-white active:bg-orange-500 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110 transition duration-500 cursor-pointer object-cover"
          type="button"
          aria-label="Submit"
        >
          {"CLAIM YOUR FREE STRATEGY CALL"}
        </button>
      </a>
        </div>

        <div className="flex flex-row justify-center text-white font-semibold mt-5 hover:scale-110 transition duration-500 cursor-pointer object-cover">
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="flex flex-row justify-center text-white font-semibold ">
          <PrismicNextLink href={`${content.instagram_link.url}`}>
            <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.instagram_logo.url}
                alt={content.instagram_logo.alt} 
                width={50}
                height={50}
              />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.facebook_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.facebook_logo.url}
              alt={content.facebook_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.tiktok_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.tiktok_logo.url}
              alt={content.tiktok_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
          <PrismicNextLink href={`${content.youtube_link.url}`}>
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.youtube_logo.url}
              alt={content.youtube_logo.alt} 
              width={50}
              height={50}
            />
          </PrismicNextLink>
        </div>
        <Image 
          className="-mt-5"
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

// OLD HOME SECTION

// {
//     const { generalInformation } = props
//   return (
//     <div className="w-full h-screen place-items-center justify-items-stretch">
//     <div id="start" className="w-full flex flex-col text-white place-items-center justify-items-stretch 3xl:mt-64 2xl:mt-60 lg:mt-64 xs:mt-48">
//         <div className="basis-1/3 flex items-center justify-center">
//           <Image  className="lg:scale-125 hover:scale-110 transition duration-500 object-cover"
//                   src={generalInformation.small_logo.url}
//                   alt={generalInformation.small_logo.alt} 
//                   width={290}
//                   height={290}
//                   priority={true}
//           />
//         </div>
//         <div className="basis-1/3 flex flex-col items-center text-center mt-10">
//           <div className="font-semibold text-2xl">{generalInformation.we_work_text}</div>
//           <div className="font-semibold text-2xl">{generalInformation.twentyfourseven_text}</div>
//         </div>
//     </div>
//   </div>

//   );
// };

export default HomeSection;