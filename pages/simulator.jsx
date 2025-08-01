import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Modal from "../components/Modal";
import Prismic from 'prismic-javascript'
import MortgageCalculator from "../components/calculator";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

const Simulator = props => {

  const { locale, locales, seo, generalInformation, menuContent, footerContent, signUpContent, SimulatorContent } = props
  
  return<div className="main overflow-x-hidden">
            <Head
              title={seo?.data?.title || ""}
              description={seo?.data?.default_description || ""}
              keywords={seo?.data?.default_keywords || ""}
              url={seo?.data?.default_url || ""}
              ogImage={seo?.data?.default_image || ""}
            />

            <NavBar
                content={menuContent?.data?.menu_links || []}
                logo={generalInformation?.data?.small_logo?.url || ""}
                imageWidth={generalInformation?.data?.small_logo_width || 0}
                imageHeight={generalInformation?.data?.small_logo_height || 0}
                locales={locales}
            />

            <div className="fixed w-full">
              <video muted autoPlay loop playsInline control='' className="video">
                <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
              </video>
              <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 object-fill"></div>
            </div>
            <div id="team" className="relative text-center items-center pt-20">
              <div className="text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">{SimulatorContent?.data?.title || ""}</div>
            </div>

            <div className="relative pt-30 flex flex-col w-full">
              <div className="padding">
                <MortgageCalculator CalculatorContent={SimulatorContent?.data || {}}/>
              </div>
              <div className="flex padding w-full">
                <div className="justify-center items-center mx-auto ">
                  <Modal className="" signUpContent={signUpContent || {}} buttonText={SimulatorContent?.data?.get_your_loan_text || ""}/>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative pr-5 pl-5  sm:w-1/2 w-full">
                  <div className="text-white text-xs padding">{SimulatorContent?.data?.bottom_message_text || ""}</div>
                </div>
              </div>
              <div className="w-full">
                <Footer content={footerContent?.data || {}}/>
              </div>
            </div>
        </div>
}

const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  const locales = await getLocales(client)
  return {
      props: {
        seo: (await getPrismicData('seo', locale)) || null,
        generalInformation: (await getPrismicData('general_information', locale)) || null,
        menuContent: (await getPrismicData('menu', locale)) || null,
        members: (await getPrismicCustomTypeData('member', locale)) || [],
        footerContent: (await getPrismicData('footer', locale)) || null,
        meetTeamContent: (await getPrismicData('meet_team', locale)) || null,
        RealtorsResourceContent: (await getPrismicData('realtors_resource', locale)) || null,
        PreApprovalProcessContent: (await getPrismicData('pre_approval_process', locale)) || null,
        BuyingRefinancingProcessContent: (await getPrismicData('buying_refinancing_process', locale)) || null,
        signUpContent : (await getPrismicData('sign_up', locale)) || null,
        CirclesGridContent : (await getPrismicData('circle_grid_info', locale)) || null,
        SimulatorContent : (await getPrismicData('simulator', locale)) || null,
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

export default Simulator
export { getStaticProps }