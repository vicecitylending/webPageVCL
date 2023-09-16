import React, { useState, useEffect } from "react";
import Image from "next/image"
import { useRouter } from 'next/router';
import { PrismicNextLink } from '@prismicio/next'


// This NavBar component is built with Prismic Type Information
// EXAMPLE -> https://flowbite.com/docs/components/navbar/

const NavBar = props => {

  const { content, logo, imageHeight, imageWidth, locales, actualLocale} = props

  let navBarLinks = []
  const [isOpen, setOpen] = useState(true);
  const menuFlip = () => {setOpen(!isOpen)};
  const router = useRouter()


  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpen(true);
      }, );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (content !== undefined) {
    content.forEach((element, index, array)  => {

      if(index  === (array.length - 1)) {
        navBarLinks.push(
          <li className="" key = {index}>
              <PrismicNextLink href={`${element.link}`}>
                <div className="text-shadow shadow-white text-white hover:text-blue-100 bg-pink-400 font-semibold sm:pl-1 sm:pr-1 hover:scale-125 transition duration-200 cursor-pointer object-cover" >{element.label}</div>
              </PrismicNextLink>
          </li>
        )
      }
      if(index  == 0) {
        navBarLinks.push(
          <li className="" key = {index}>
              <PrismicNextLink href={`${element.link}`}>
                <div className="text-shadow shadow-white text-white hover:text-blue-100 bg-pink-400 font-semibold sm:pl-1 sm:pr-1 hover:scale-125 transition duration-200 cursor-pointer object-cover" >{element.label}</div>
              </PrismicNextLink>
          </li>
        )
      }
      else {
        navBarLinks.push(
          <li className="" key = {index}>
              <PrismicNextLink href={`/${element.link}`}>
                <div className="text-shadow shadow-white text-white hover:text-blue-100 font-semibold ">{element.label}</div>
              </PrismicNextLink>
          </li>
        )
      }
    }
    )
  }

  return (
    <nav className="fixed flex inset-x-0 px-2 sm:px-4 xl:py-1 bg-black w-full z-50">
      <div className="flex translate-y-11 ml-3">
        <PrismicNextLink href="/#home" className="xl:hidden">
          <Image className="scale-150" src={logo} width={imageWidth} height={imageHeight} alt="Vice-City-Lending-Logo"/>
        </PrismicNextLink>
      </div>
      <div className="padding container flex flex-wrap xl:justify-center justify-end items-start mx-auto">
        <button aria-label="Flip" id="flipButton" onClick={menuFlip} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-3xl xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`w-full xl:block xl:w-auto ${isOpen && "hidden"}`} id="mobile-menu">
          <ul className="flex flex-col mt-10 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium items-end xl:items-start">
            {navBarLinks}
            <div className="flex flex-row text-white">
                {locales.map((locale) => (
                  <div className="text-blue" key={locale.id}>
                    <PrismicNextLink href={`/${locale.id}${router.pathname}`}>
                      <div className="text-blue font-semibold pl-1 pr-1">
                      {locale.id === 'en-us' ? 'English' : locale.id === 'es-co' ? 'Español' : locale.id}
                      </div>
                    </PrismicNextLink>
                  </div>
                ))}
              </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;