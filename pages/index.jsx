import React from "react";
import Image from 'next/image'
import Head from "../components/head";
import NavBar from "../components/navbar";
import Contact from "./contact"; //Different from component/contact.jsx. <Contact> in component folder is for Popup.
import Prismic from 'prismic-javascript'
import MembersCarousel from "../components/carousel";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import InfoGrid from "../components/molecules/infogrid";
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"


const Homepage = props => {
    
  const { locales, seo, generalInformation, menuContent, members, footerContent, meetTeamContent, CirclesGridContent, RealtorsResourceContent, PreApprovalProcessContent, BuyingRefinancingProcessContent, signUpContent } = props
  console.log(locales)
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
              locales={locales}
            />

          {/* Background */}
          <div className="fixed w-full">
            <video muted autoPlay loop playsInline control='' className="video">
              <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
            </video>
            <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 w-full h-full object-fill"></div>
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
                            width={290}
                            height={290}
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
              <div id="team" className="w-full h-screen sm:pt-20 pt-24 mb-10">
                <div className="w-full flex-col items-center justify-center">
                  <div className="padding text-center items-center w-full">
                    <div className="w-full text-center items-center text-white text-2xl sm:text-4xl">{meetTeamContent.data.subtitle}</div>
                  </div>
                  <div>
                    <div className="sm:pr-32 pr-5 sm:pl-32 pl-5 items-center w-full">
                      <div className="w-full shadow-white text-white text-l sm:text-2xl">{meetTeamContent.data.text1}</div>
                    </div>
                  </div>
                  <div className="text-center items-center w-full sm:mt-10 mt-10 mb-5">
                    <div className="w-full text-center items-center text-white text-2xl sm:text-4xl">{meetTeamContent.data.title}</div>
                  </div>
                  <div className="w-full sm:mt-10 -mt-16">
                    <MembersCarousel members={members}/>
                  </div>
                </div>
              </div>
            </div>
  
              <div className="flex flex-col items-center">
                <div id ="buying" className="sm:pr-5 pr-5 sm:pl-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
                  <div className="flex flex-col justify-center">
                    <div className="text-white text-white text-2xl sm:text-4xl pb-5">{BuyingRefinancingProcessContent.data.title}</div>
                    <div className="text-white text-l sm:text-2xl">{BuyingRefinancingProcessContent.data.text}</div>
                    <div className="self-center">
                      <div className="flex">
                        <div className="pt-10 sm:pr-32 pr-5">
                          <Image  
                            className=""
                            src={BuyingRefinancingProcessContent.data.icon1.url}
                            alt={BuyingRefinancingProcessContent.data.icon1.alt} 
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="pt-10 sm:pl-32 pl-5">
                          <Image 
                            className=""
                            src={BuyingRefinancingProcessContent.data.icon2.url}
                            alt={BuyingRefinancingProcessContent.data.icon2.alt} 
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="pr-5 pl-5 sm:pt-20 pt-32 w-full h-screen sm:pb-20 pb-0">
              <div className="flex flex-col">
                  <div className="">
                    <div className="sm:pr-32 pr-5 sm:pl-32 pl-5 w-full items-center text-white text-l sm:text-2xl">{meetTeamContent.data.text2}</div>
                  </div>
                  <div className="">
                    <div className="ml-0 sm:ml-20 circle-grid">
                      <InfoGrid image={CirclesGridContent.data.image} infoCircles={CirclesGridContent.data}/>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="pr-5 pl-5 items-center sm:w-1/2 w-full">
                      <div className="w-full items-center text-white text-l sm:text-2xl">{meetTeamContent.data.text3}</div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="sm:h-screen h-1/2"></div>

            <div className="flex flex-col items-center h-screen sm:mb-32 mb-0">
              <div id ="preapproval" className="pr-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
                <div className="flex flex-col justify-center">
                  <div className="text-white text-white text-2xl sm:text-4xl pb-5">{PreApprovalProcessContent.data.title}</div>
                  <div className="text-white text-l sm:text-2xl">{PreApprovalProcessContent.data.text}</div>
                  <div className="self-center">
                    <div className="flex">
                      <div className="pt-10 sm:pr-32 pr-5">
                        <Image  className=""
                                src={PreApprovalProcessContent.data.icon1.url}
                                alt={PreApprovalProcessContent.data.icon1.alt} 
                                width={200}
                                height={200}
                          />
                      </div>
                      <div className="pt-10 sm:pl-32 pl-5">
                        <Image  className=""
                                src={PreApprovalProcessContent.data.icon2.url}
                                alt={PreApprovalProcessContent.data.icon2.alt} 
                                width={200}
                                height={200}
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center h-screen sm:mb-32 mb-0">
              <div id ="loan" className="pr-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
                <div className="flex flex-col justify-center">
                  <div className="text-white text-white text-2xl sm:text-4xl pb-5">{RealtorsResourceContent.data.title}</div>
                  <div className="text-white text-l sm:text-2xl">{RealtorsResourceContent.data.text}</div>
                  <div className="self-center">
                    <div className="flex">
                      <div className="pt-10 sm:pr-32 pr-5">
                        <Image  className=""
                                src={RealtorsResourceContent.data.icon1.url}
                                alt={RealtorsResourceContent.data.icon1.alt} 
                                width={200}
                                height={200}
                          />
                      </div>
                      <div className="pt-10 sm:pl-32 pl-5">
                        <Image  className=""
                                src={RealtorsResourceContent.data.icon2.url}
                                alt={RealtorsResourceContent.data.icon2.alt} 
                                width={200}
                                height={200}
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full">
              <div id ="contact" className="pr-5 pl-5 sm:pt-20 pt-32">
                <div className="flex sm:flex-row flex-col justify-center">
                  <div className="sm:translate-x-0 translate-x-5 items-center text-white sm:w-1/4 w-full">
                    <div className="text-4xl">{signUpContent.data.title}</div>
                    <div className="mt-1 text-white text-xl pb-6 ">{signUpContent.data.subtitle}</div>
                    <div className="mt-1 text-white text-sm pb-6 mr-7">{signUpContent.data.body_text}</div>
                  </div>
                  <div className="">
                    <Contact signUpContent={signUpContent.data}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <Footer content={footerContent.data}/>
              </div>
            </div>

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
        locales: locales,
        // client: createClient({ previewData }),
        // menuContentTEST: await client.getPrismicData('menu', params.uid ,{ lang: locale}),
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

export default Homepage
export { getStaticProps }