import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Modal from "../components/Modal";
import Prismic from 'prismic-javascript'
import MortgageCalculator from "../components/calculator";
import { PrismicClient } from '../prismic-configuration'
import Footer from "../components/footer";

const Simulator = props => {

  const { seo, generalInformation, menuContent, footerContent, signUpContent } = props
  
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

            <div className="fixed w-full">
              <video muted autoPlay loop playsInline control='' className="video">
                <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
              </video>
              <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-500 opacity-70 object-fill"></div>
            </div>
            <div id="team" className="relative text-center items-center pt-20">
              <div className="text-shadow shadow-white text-white font-semibold text-2xl sm:text-4xl padding">Mortgage Calculator</div>
            </div>

            <div className="relative pt-30 flex flex-col w-full">
              <div className="padding">
                <MortgageCalculator/>
              </div>
              <div className="flex padding w-full">
                <div className="justify-center items-center mx-auto ">
                  <Modal className="" signUpContent={signUpContent}/>
                </div>
              </div>
              <div className="relative items-center pt-10">
                <div className="text-white text-xs padding">The mortgage calculator is designed solely for educational purposes. The actual rates and monthly payment amounts, which are subject to market fluctuations, depend on various factors including geographical location and loan specifics. The estimates provided are based on the information provided by you and may not incorporate additional fees and costs that we may apply, such as taxes, insurance, and other related expenses. Therefore, the actual payment obligation may be higher. Vice City Lending</div>
              </div>
              <div className="w-full">
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
        signUpContent : await getPrismicData('sign_up'),
        CirclesGridContent : await getPrismicData('circle_grid_info')
      }
  }
}

// Wrapper for Prismic functions
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