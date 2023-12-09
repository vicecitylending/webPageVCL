import * as React from "react";
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'
import CalendlyButton from "../components/calendlyButton";



const HomeSection = props => {
  const { generalContent, content } = props;

  
  return (
      <div className="flex flex-col items-center min-h-screen">
        <Image 
          className="mt-24    hover:scale-110 transition duration-500 object-cover"
          src={content.logo_no_background.url}
          alt={content.logo_no_background.alt} 
          width={300}
          height={300}
        />

      <div className="flex flex-row text-center justify-center text-white font-semibold xl:mt-28 mt-10 object-cover pl-5 pr-5 text-3xl">
        {generalContent.title}
      </div>
      <div className="flex flex-row text-center justify-center text-gray-300 font-semibold mt-5  object-cover text-3xl">
        {generalContent.subtitle}
      </div>

      {/* <div className="flex mt-10">
        <a href='https://www.calendly.com/vicecitylending' target="_blank" rel="noopener noreferrer">
          <button
            id="submitButton"
            className="border-4 border-white border-opacity-80 text-black relative z-10 bg-gradient-to-b from-yellow-200 to-yellow-800 hover:from-yellow-300 hover:to-yellow-800 active:from-yellow-400 active:to-yellow-700 uppercase text-lg px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            type="button"
            aria-label="Submit"
          >
            {generalContent.button_message}

          </button>
        </a>
      </div> */}

      <CalendlyButton ButtonMessage={generalContent.button_message}/>

        <div className="flex flex-row justify-center text-white font-semibold mt-5 hover:scale-110 transition duration-500 cursor-pointer object-cover">
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="flex flex-row justify-center text-white font-semibold ">
          <a href={`${content.instagram_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.instagram_logo.url}
                alt={content.instagram_logo.alt} 
                width={50}
                height={50}
              />
          </a>
          <a href={`${content.facebook_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.facebook_logo.url}
              alt={content.facebook_logo.alt} 
              width={50}
              height={50}
            />
          </a>
          <a href={`${content.tiktok_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.tiktok_logo.url}
              alt={content.tiktok_logo.alt} 
              width={50}
              height={50}
            />
          </a>
          <a href={`${content.youtube_link.url}`} target="_blank" rel="noopener noreferrer">
            <Image 
              className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={content.youtube_logo.url}
              alt={content.youtube_logo.alt} 
              width={50}
              height={50}
            />
          </a>
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