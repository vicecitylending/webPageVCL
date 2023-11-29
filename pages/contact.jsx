import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Prismic from 'prismic-javascript'
import Contact from "../components/contactSection"; //Different from component/contact.jsx. <Contact> in component folder is for Popup.

import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

const contact = props => {

  const { locale, locales, seo, generalInformation, menuContent, footerContent, signUpContent } = props

  
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
              <div className="xl:w-1/2 w-full h-full self-center">
                <div id ="contact" className="pr-5 pl-5 sm:pt-20 pt-32 xl:mt-20">
                  <div className="flex sm:flex-row flex-col justify-center">
                    <div className="sm:translate-x-0 translate-x-5 items-center text-white w-full">
                      <div className="text-4xl">{signUpContent.data.title}</div>
                      <div className="mt-1 text-white sm:text-2xl pb-6">{signUpContent.data.subtitle}</div>
                      <div className="mt-1 text-white sm:text-2xl pb-6 sm:mr-0 mr-7 text-justify">{signUpContent.data.body_text}</div>
                    </div>
                    <Contact signUpContent={signUpContent.data}/>
                  </div>
                </div>
              </div>
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
        footerContent: await getPrismicData('footer', locale),
        RealtorsResourceContent: await getPrismicData('realtors_resource', locale),
        QmLoansContent : await getPrismicData('qm_loans', locale),
        NonQmLoansContent : await getPrismicData('non_qm_loans', locale),
        signUpContent : await getPrismicData('sign_up', locale),
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

export default contact
export { getStaticProps }