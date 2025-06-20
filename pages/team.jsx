import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Prismic from 'prismic-javascript'
import MembersCarousel from "../components/carousel";
import InfoGrid from "../components/molecules/infogrid";
import CalendlyButton from "../components/calendlyButton";


import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

const Buying = props => {

  const { locale, locales, seo, generalInformation, menuContent, footerContent, meetTeamContent, CirclesGridContent, members } = props

  
  return <div className="main min-h-screen flex flex-col overflow-x-hidden">
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
                locales={locales}
            />

            <div className="fixed w-full">
              <video muted autoPlay loop playsInline control='' className="video">
                <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
              </video>
              <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 object-fill"></div>
            </div>

            <div className="relative flex flex-col flex-1 w-full">

            
            <div className="flex flex-col items-center h-full">
              <div id="team" className="sm:pr-5 pr-5 sm:pl-5 pl-5 sm:pt-20 pt-32 xl:w-1/2 w-full xl:mt-10">
                <div className="w-full flex-col justify-center">
                  <div className="w-full">
                    <div className="text-white text-2xl sm:text-4xl font-semibold pb-5">{meetTeamContent.data.subtitle}</div>
                  </div>
                  <div>
                    <div className="">
                      <div className="w-full shadow-white text-white text-l sm:text-2xl text-justify">{meetTeamContent.data.text1}</div>
                    </div>
                  </div>
                  <div className="text-center items-center w-full xl:mt-16 mt-10">
                    <div className="w-full text-center items-center text-white text-2xl sm:text-4xl font-semibold">{meetTeamContent.data.title}</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:mt-16 items-center">
                <MembersCarousel members={members}/>
              </div>
            </div>


            <div className="pr-5 pl-5 sm:mt-60 mt-32 w-full h-full 2xl:mb-20 xl:mb-20 sm:mb-32 mb-0">
              <div className="flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="items-center  xl:w-1/2 w-full">
                      <div className="w-full items-center text-white text-l sm:text-2xl mb-14 text-justify">{meetTeamContent.data.text2}</div>
                    </div>
                  </div>
                  <div className="circle-grid-xl">
                    <div className="3xl:ml-24 2xl:ml-12 xl:ml-20 ml-0 lg:ml-9 md:ml-0 sm:ml-16 xl:ml-20 circle-grid mb-14">
                      <InfoGrid
                        image={CirclesGridContent.data.image}
                        infoCircles={CirclesGridContent.data}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="items-center xl:w-1/2 w-full">
                      <div className="w-full items-center text-white text-l sm:text-2xl text-justify">{meetTeamContent.data.text3}</div>
                    </div>
                  </div>
              </div>
            </div>


            
                <div className="flex-col self-center">
                  <CalendlyButton ButtonMessage={generalInformation.data.button_message}/>
                </div>



                <Footer content={footerContent.data}/>
            </div>
        </div>
}

const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  const locales = await getLocales(client)
  return {
      props: {
        seo: await getPrismicData('seo', locale),
        generalInformation: await getPrismicData('general_information', locale),
        menuContent: await getPrismicData('menu', locale),
        members: await getPrismicCustomTypeData('member', locale), // Different Function to query multi instances.
        footerContent: await getPrismicData('footer', locale),
        meetTeamContent: await getPrismicData('meet_team', locale),
        RealtorsResourceContent: await getPrismicData('realtors_resource', locale),
        PreApprovalProcessContent: await getPrismicData('pre_approval_process', locale),
        BuyingRefinancingProcessContent: await getPrismicData('buying_refinancing_process', locale), 
        signUpContent : await getPrismicData('sign_up', locale),
        CirclesGridContent : await getPrismicData('circle_grid_info', locale),
        SimulatorContent : await getPrismicData('simulator', locale),
        locales: locales,
        locale:locale
      }
  }
}

// Wrapper for prismic functions
const getPrismicData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name),{ lang } 
  )
  // Get first doc of this type (there should be 1 doc per type)
  const doc = prismicAnswer.results[0]
  return doc
}

const getPrismicCustomTypeData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name), { lang }  
  )
  // Get all docs of this type (there should many docs per type)
  const CustomTypeDoc = prismicAnswer.results
  return CustomTypeDoc
}

export default Buying
export { getStaticProps }