import * as React from "react";
import Image from "next/image"
import { RichText } from 'prismic-reactjs';

// This NavBar component is built with Prismic Type Information
// EXAMPLE -> https://flowbite.com/docs/components/navbar/

const NavBar = props => {
  const { content, logo, imageHeight, imageWidth, phone } = props
  let navBarLinks = []

  const [isOpen, setOpen] = React.useState(true);
  const menuFlip = () => {setOpen(!isOpen)};

  if (content !== undefined) {
    // const logoURL = content.label[0].small_logo.url 
    content.forEach((element, index, array)  => {

      if(index === (array.length - 1)) {
        navBarLinks.push(
          <li className="text-xl" key = {index}>
            {/* <a className="text-white hover:text-blue-100 bg-pink-400 pl-2 pr-10 font-semibold -mr-8" href={element.link[0].text}>{element.label[0].text} </a> */}
            <a className="text-white hover:text-blue-100 bg-pink-400 pl-2 pr-10 font-semibold -mr-10" href={element.link[0].text}>APPLY NOW </a>
          </li>
        )
      }
      else {
        navBarLinks.push(
          <li className="text-xl" key = {index}>
            <a className="text-white hover:font-semibold " href={element.link[0].text}>{element.label[0].text}</a>
          </li>
        )
      }
    })
  }

  return <nav className="fixed inset-x-0 px-2 sm:px-4 py-2.5 bg-purple-100 font-roboto w-full z-50">
    <div className="container flex flex-wrap justify-between items-center mx-auto bg-purple-100">
        <a href="#home" className="flex bg-purple-100">
          <Image src={logo} width={imageWidth} height={imageHeight}/>
        </a>
        {/* <a className="text-white font-roboto italic font-bold text-xs md:text-xl" href="tel:+1(407)561-9818">
                  {RichText.render(phone)}
                </a> */}
      <button  onClick={menuFlip} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      <div className={`w-full md:block md:w-auto ${isOpen && "hidden"}`} id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-end">
          {navBarLinks}
        </ul>
      </div>
    </div>
  </nav>
}

export default NavBar;