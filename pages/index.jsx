import React, { useRef, useEffect } from "react";
import Image from 'next/image'
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

  const { seo, generalInformation, menuContent, members, footerContent, meetTeamContent, WhoWeAreContent, OurServicesContent, FAQ, contactContent, plansContent, signUpContent } = props
  
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
            <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70"></div>
          </div>

          <div id="home" className="flex flex-col w-full relative">
            <div className="w-full h-screen place-items-center justify-items-stretch">
              <div id="start" className="w-full flex flex-col md:flex-row text-white place-items-center justify-items-stretch translate-y-56">
                  <div className="basis-1/3 flex flex-col items-center text-center">
                    <div className="font-semibold text-2xl sm:text-4xl">WE WORK</div>
                    <div className="font-semibold text-2xl sm:text-4xl">24/7</div>
                  </div>
                  <div className="basis-1/3 flex items-center justify-center">
                    <img className="logo-size-m" src={generalInformation.data.small_logo.url} alt="Logo Vice City Lending" />
                  </div>
                  <div className="basis-1/3 flex flex-col items-center justify-center text-center">
                    <div className="text-xs sm:text-xl">POWERED BY</div>
                    <div className="text-xl sm:text-4xl font-semibold">DADELAND</div>
                    <div className="text-xl sm:text-4xl">DIFFERENCE</div>
                </div>
                <div id="team"></div>
              </div>
            </div>
            <div>
              <div className="w-full">
                <div className="w-full h-full flex-col text-center  items-center justify-center">
                  <div className="text-center items-center w-full">
                    <div className="w-full text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-2xl sm:text-4xl">{meetTeamContent.data.subtitle}</div>
                  </div>
                  <div>
                    <div className="text-center items-center w-full">
                      <div className="padding w-full text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-l sm:text-2xl">{meetTeamContent.data.text1}</div>
                    </div>
                  </div>
                  <div className="text-center items-center w-full sm:mt-10 mt-10">
                    <div className="w-full text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-2xl sm:text-4xl">{meetTeamContent.data.title}</div>
                  </div>
                  <div className="w-full sm:mt-10 -mt-16">
                    <MembersCarousel members={members}/>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center items-center w-full">
                <div className="padding w-full text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-l sm:text-2xl">{meetTeamContent.data.text2}</div>
              </div>
            </div>
            <div>
              <div className="text-center items-center w-full">
                <div className="padding w-full text-center items-center text-shadow shadow-white text-white font-roboto italic font-semibold text-l sm:text-2xl">{meetTeamContent.data.text3}</div>
              </div>
            </div>
            <div>
              <Contact signUpContent={signUpContent.data}/>
            </div>
          </div>

                      {/* <div id ="sign-up" className="relative h-screen pt-10 w-screen">
              <div className="flex flex-col text-center items-center text-white text-xl italic font-roboto font-bold ">{signUpContent.data.title}</div>
              <div className="md:flex justify-center p-8">
                <div className="text-white text-3xl italic font-roboto pr-20 pb-6 "></div>
                <Contact signUpContent={signUpContent.data}/>
              </div>
            </div>
           
           {/* <div className="flex inset-x-0 font-roboto w-full">
             <Footer content={footerContent.data}/>
           </div> */}
          {/* Landing */}



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
        meetTeamContent: await getPrismicData('meet_team'),
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