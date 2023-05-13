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

const Simulator = props => {

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

          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
            />

          <div className="">
                <video ref={ vidRef } muted autoPlay loop playsInline control='' className="fixed">
                  <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
                </video>
                <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70"></div>
          </div>
            <div id="team" className="relative text-center items-center w-screen pt-20">
              <div className="container text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">What is your purchasing power?</div>
            </div>

            <div className="padding relative w-screen pt-30">
              <div className="container justify-between items-center mx-auto"><MortgageCalculator/></div>
            </div>

            <div className="padding  relative w-screen h-1/2 max-w-90vw">
              <div className="container justify-between items-center mx-auto "><Modal className="" signUpContent={signUpContent}/></div>
            </div>
          

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

export default Simulator
export { getStaticProps }