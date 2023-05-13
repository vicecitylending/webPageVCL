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


  // const vidRef = useRef();

  // useEffect(() => {
  //   vidRef.current.addEventListener('canplaythrough', () => {
  //     vidRef.current.play();
  //   });
  // }, []);

  const { seo, generalInformation, menuContent, members, footerContent, homeContent, WhoWeAreContent, OurServicesContent, FAQ, contactContent, plansContent, signUpContent } = props

  return<div className="main overflow-x-hidden">
          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              // phone={contactContent.data.number_field}
            />

          {/* Background */}
          <div className="fixed w-full">
            <video muted autoPlay loop playsInline control='' className="video">
              <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
            </video>
            <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70"></div>
          </div>

          <div className="flex flex-col w-screen">
            <div>
              <div className="pt-7 sm:pt-8 absolute flex flex-col md:flex-row w-full h-full place-items-center justify-items-stretch text-white">
                <div className="basis-1/3 flex flex-col items-center justify-center text-center">
                  <div className="font-semibold text-2xl sm:text-4xl">WE WORK</div>
                  <div className="font-semibold text-2xl sm:text-4xl">24/7</div>
                </div>
                <div className="basis-1/3 flex items-center justify-center">
                  <img className="logo-size-m" src={generalInformation.data.small_logo.url} alt="Logo Vice City Lending" />
                </div>
                <div class="basis-1/3 flex flex-col items-center justify-center text-center">
                  <div className="text-xs sm:text-xl">POWERED BY</div>
                  <div className="text-xl sm:text-4xl font-semibold">DADELAND</div>
                  <div className="text-xl sm:text-4xl">DIFFERENCE</div>
                </div>
              </div>
            </div>

            <div className="">
              <div id="team" className="h-screen mt-40 text-center items-center padding">
                <div className="text-center items-center">
                  <div className="relative text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-2xl sm:text-4xl">Team with 10+ years of combined experience in the industry.</div>
                </div>
              </div>
            </div>
            <div id ="sign-up" className="relative h-screen pt-10 w-screen">
              <div className="flex flex-col text-center items-center text-white text-xl italic font-roboto font-bold ">{signUpContent.data.title}</div>
              <div className="md:flex justify-center p-8">
                <div className="text-white text-3xl italic font-roboto pr-20 pb-6 "></div>
                <Contact signUpContent={signUpContent.data}/>
              </div>
            </div>
            <div className="relative"> 
              <MembersCarousel className="" members={members}/>
            </div>
            <div className="footer relative flex fixed inset-x-0 font-roboto w-full z-50"><Footer content={footerContent.data}/></div>

          </div>
          {/* Landing */}

            {/* <div className="absolute container">
              <div id="otro-componente" className="relative text-center items-center w-screen pt-20">
                <div className="container text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">Este es otro componente que aparece debajo del componente "team".</div>
              </div>
            </div> */}


          {/* <div id="" className="">
            <div className="text-center inset-0 flex items-center justify-center text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">15+ years servicing clients and building strong relationships.</div>
          </div> */}

          {/* Sign Up Section */}
        

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