import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Modal from "../components/Modal";
import Prismic from 'prismic-javascript'
import BuyingSection from "../components/buyingSection";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

const Buying = props => {

  const { locale, locales, seo, generalInformation, menuContent, footerContent, signUpContent, SimulatorContent, BuyingRefinancingProcessContent } = props

  
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

            <div className="fixed w-full">
              <video muted autoPlay loop playsInline control='' className="video">
                <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
              </video>
              <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 object-fill"></div>
            </div>

            <div className="relative  flex flex-col w-full">

                <BuyingSection BuyingRefinancingContent={ BuyingRefinancingProcessContent}/>

                <div className="w-full">
                    <Footer content={footerContent.data}/>
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