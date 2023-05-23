import React, { useRef, useEffect } from "react";
import Image from 'next/image'
import Head from "../components/head";
import NavBar from "../components/navbar";
import Contact from "./contact"; //Different from component/contact.jsx. <Contact> in component folder is for Popup.
import Prismic from 'prismic-javascript'
import MembersCarousel from "../components/carousel";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import InfoGrid from "../components/molecules/infogrid";


const Homepage = props => {

  const { seo, generalInformation, menuContent, members, footerContent, meetTeamContent, CirclesGridContent, WhoWeAreContent, OurServicesContent, FAQ, contactContent, plansContent, signUpContent } = props

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
            />

          {/* Background */}
          <div className="fixed w-full">
            <video muted autoPlay loop playsInline control='' className="video">
              <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
            </video>
            <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 w-full h-full"></div>
          </div>

          <div id="home" className="flex flex-col w-full relative">
            <div className="w-full h-screen place-items-center justify-items-stretch">
              <div id="start" className="w-full flex flex-col md:flex-row text-white place-items-center justify-items-stretch sm:translate-y-64 translate-y-44">
                  <div className="basis-1/3 flex flex-col items-center text-center">
                    <div className="font-semibold text-2xl sm:text-4xl">WE WORK</div>
                    <div className="font-semibold text-2xl sm:text-4xl">24/7</div>
                  </div>
                  <div className="basis-1/3 flex items-center justify-center">
                    <Image  className="logo-size-m"
                            src={generalInformation.data.small_logo.url}
                            alt={generalInformation.data.small_logo.alt} 
                            width={generalInformation.data.small_logo.dimensions.width}
                            height={generalInformation.data.small_logo.dimensions.height}
                            priority={true}
                    />
                  </div>
                  <div className="basis-1/3 flex flex-col items-center justify-center text-center">
                    <div className="text-xs sm:text-xl">POWERED BY</div>
                    <div className="text-xl sm:text-4xl font-semibold">DADELAND</div>
                    <div className="text-xl sm:text-4xl">DIFFERENCE</div>
                </div>
              </div>
            </div>

            <div>
              <div id="team" className="w-full h-screen">
                <div className="w-full flex-col text-center items-center justify-center">
                  <div className="padding text-center items-center w-full">
                    <div  className="w-full text-center items-center text-white text-2xl sm:text-4xl">{meetTeamContent.data.subtitle}</div>
                  </div>
                  <div>
                    <div className="text-center items-center w-full">
                      <div className="padding w-full text-center items-center shadow-white text-white  text-l sm:text-2xl">{meetTeamContent.data.text1}</div>
                    </div>
                  </div>
                  <div className="text-center items-center w-full sm:mt-10 mt-10">
                    <div className="w-full text-center items-center text-white text-2xl sm:text-4xl">{meetTeamContent.data.title}</div>
                  </div>
                  <div className="w-full sm:mt-10 -mt-16">
                    <MembersCarousel members={members}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-center items-center w-full">
                <div className="padding w-full text-center items-center text-white   text-l sm:text-2xl">{meetTeamContent.data.text2}</div>
              </div>
            </div>

              <div className="ml-0 sm:ml-20 circle-grid">
                <InfoGrid image={CirclesGridContent.data.image} infoCircles={CirclesGridContent.data}/>
              </div>

            <div>
              <div className="text-center items-center w-full">
                <div className="padding w-full text-center items-center text-white text-l sm:text-2xl">{meetTeamContent.data.text3}</div>
              </div>
            </div>

            <div id ="contact" className="pt-10 w-full">
              <div className="flex sm:flex-row flex-col py-9 justify-center">
                <div className="padding sm:translate-x-0 translate-x-5 items-center text-white  sm:w-1/4 w-full">
                  <div className="text-4xl">{signUpContent.data.title}</div>
                  <div className="mt-1 text-white text-xl  pb-6 ">{signUpContent.data.subtitle}</div>
                </div>
                <div className="sm:w-1/4 w-full">
                  <Contact signUpContent={signUpContent.data}/>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <Footer content={footerContent.data}/>
            </div>
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
        meetTeamContent: await getPrismicData('meet_team'),
        // WhoWeAreContent: await getPrismicData('who_we_are'),
        // OurServicesContent: await getPrismicData('our_services'),
        // FAQ: await getPrismicData('faq'), 
        // contactContent : await getPrismicData('contact'),
        // plansContent : await getPrismicData('plans'),
        signUpContent : await getPrismicData('sign_up'),
        CirclesGridContent : await getPrismicData('circle_grid_info')
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