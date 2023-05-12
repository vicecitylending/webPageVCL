import React, { useRef, useEffect } from "react";
import Image from 'next/image'
import { RichText } from 'prismic-reactjs';
import Head from "../components/head";
import NavBar from "../components/navbar";
import Contact from "./contact";
import Modal from "../components/Modal";
import Prismic from 'prismic-javascript'
import MortgageCalculator from "../components/calculator";
import MembersCarousel from "../components/carousel";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";


const Homepage = props => {


  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.addEventListener('canplaythrough', () => {
      vidRef.current.play();
    });
  }, []);

  const { seo, generalInformation, menuContent, members, footerContent, homeContent, WhoWeAreContent, OurServicesContent, FAQ, contactContent, plansContent, signUpContent } = props

  return<div className="overflow-x-hidden">

          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />

          {/* Home Section */}
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              // phone={contactContent.data.number_field}
            />

          <div className="video-background mt-14 relative">
                <video ref={ vidRef } muted autoPlay loop playsInline control='' className="fixed video-background__video">
                  <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
                </video>
                <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70"></div>
          </div>
          <div className="container mx-auto">
  <div className="grid-container">
    <div className="imagen1 font-semibold text-2xl sm:text-4xl">WE WORK</div>
    <div className="imagen1A font-semibold text-2xl sm:text-4xl">24/7</div>
    <img className="imagen2" src={generalInformation.data.small_logo.url} alt="Logo Vice City Lending" />
    <div className="imagen3 text-xs sm:text-xl">POWERED BY</div>
    <div className="imagen3A text-xl sm:text-4xl font-semibold">DADELAND</div>
    <div className="imagen3B text-xl sm:text-4xl">DIFFERENCE</div>
  </div>
  <div id="team" className="relative text-center items-center w-screen pt-20">
    <div className="grid-container">
      <div className="relative text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding py-0">Team with 10+ years of combined experience in the industry.</div>
    </div>
  </div>
  <div className="grid-container">
    <div id="otro-componente" className="relative text-center items-center w-screen pt-20">
      <div className="container text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding py-0">Este es otro componente que aparece debajo del componente "team".</div>
    </div>
  </div>
</div>


          {/* <div className="no-shadow"> 
            <MembersCarousel
              className="no-shadow"
              members={members}
            />
          </div> */}
          {/* <div id="" className="relative mb-10">
            <div className="absolute text-center inset-0 flex items-center justify-center text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">15+ years servicing clients and building strong relationships.</div>
          </div> */}

          {/* Sign Up Section */}
          {/* <div id ="sign-up" className="absolute container h-max pt-10 w-screen">
              <div className="flex flex-col items-center text-white text-4xl italic font-roboto font-bold py-9 pl-8">{signUpContent.data.title}</div>
              <div className="md:flex justify-center p-8">
                <div className="text-white text-3xl italic font-roboto pr-20 pb-6 "></div>
                <Contact signUpContent={signUpContent.data}/>
              </div>
          </div> */}
        

          {/* <div className="footer absolute flex fixed inset-x-0 font-roboto w-full z-50"><Footer content={footerContent.data}/></div> */}
        </div>
}

const getStaticProps = async ({ params }) => {
  return {
      props: {
        seo: await getPrismicData('seo'),
        generalInformation: await getPrismicData('general_information'),
        menuContent: await getPrismicData('menu'),
        members: await getPrismicCustomTypeData('member'), // Different Function to query multi instances.
        footerContent: await getPrismicData('footer'),
        // homeContent: await getPrismicData('homepage'),
        // WhoWeAreContent: await getPrismicData('who_we_are'),
        // OurServicesContent: await getPrismicData('our_services'),
        // FAQ: await getPrismicData('faq'), 
        // contactContent : await getPrismicData('contact'),
        // plansContent : await getPrismicData('plans'),
        signUpContent : await getPrismicData('sign_up')
      }
  }
}

// Wrapper for prismic functions
const getPrismicData = async (name) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name) 
  )

  // Get first doc of this type (there should be 1 doc per type)
  const doc = prismicAnswer.results[0]

  return doc
}

const getPrismicCustomTypeData = async (name) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name) 
  )

  // Get all docs of this type (there should many docs per type)
  const CustomTypeDoc = prismicAnswer.results

  return CustomTypeDoc
}

export default Homepage
export { getStaticProps }