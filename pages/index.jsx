import * as React from "react";
import Image from 'next/image'
import { RichText } from 'prismic-reactjs';
import Head from "../components/head";
import NavBar from "../components/navbar";
import Contact from "./contact";
import Modal from "../components/Modal";
import Prismic from 'prismic-javascript'
import MortgageCalculator from "../components/calculator";
import { PrismicClient } from '../prismic-configuration'
import { FcHome } from "react-icons/fc";


const Homepage = props => {
  const { seo, generalInformation, menuContent, homeContent, WhoWeAreContent, OurServicesContent, FAQ, contactContent, plansContent, signUpContent } = props
  return<div className="overflow-x-hidden">
    {console.log(menuContent.data.menu_links.url)}
    {console.log(generalInformation)}

          <Head
            title={seo.data.title[0].text}
            description={seo.data.default_description[0].text}
            keywords={seo.data.default_keywords[0].text}
            url={seo.data.default_url[0].text}
            ogImage={seo.data.default_image[0].text}
          />

          {/* Home Section */}
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              // phone={contactContent.data.number_field}
            />

          {/* <div className="flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-center">
              Vice City Lending  Mortgage Calculator
            </h1>
          </div> */}

          <div className="video-background mt-28">
                <video autoPlay={true} loop muted>
                  <source src="/background/miami_night_1000K.mp4" type="video/mp4" />
                </video>
                <div className="content">
                Background Night
                </div>
          </div>

          <div className="mt-5">
            <MortgageCalculator/>
          </div>


          {/* What Section are this */}
          {/* <div id ="home" className="bg-cover md:bg-no-repeat md:bg-top h-full w-screen bg-right" style={{ backgroundImage: `url(${homeContent.data.background_image.url}`}}>
            <div className="flex flex-col items-center justify-center h-screen text-white w-screen">
              <div className="pt-60 md:pt-30">
                <Image src={homeContent.data.logo.url} width="300" height="300"/>
              </div>
              <div className="md:pt-10 md:pb-40 font-roboto italic text-6xl invisible md:visible">
                <p>{homeContent.data.text_field_1[0].text}</p>
              </div>
              <div className="self-end">
                <a href="#sign-up">
                  <div className="bg-orange-400  text-white justify-center text-center font-bold pr-10 pl-5 visible md:invisible">REQUEST INFO</div>
                </a>
              </div>
            </div>
          </div> */}

          {/* Who we are Section */}
          {/* <div id ="who-we-are" className="md:bg-cover md:bg-no-repeat  md:bg-top h-full pt-20 pb-10 bg-left-top md:w-screen" style={{ backgroundImage: `url(${WhoWeAreContent.data.background_image.url}`}}>
            <div className="md:grid md:grid-cols-2">
              <div className="md:flex md:flex-col pl-2 h-full text-white text-5xl italic font-roboto font-bold py-9 w-screen">{WhoWeAreContent.data.title[0].text}</div>
              <div className="flex flex-col p-3 md:content-center justify-items-center md:justify-center w-screen h-full text-white text-2xl md:text-3xl italic font-roboto">{RichText.render(WhoWeAreContent.data.test_field_1)}</div>
            </div>
          </div> */}

          {/* Our Services Section */}
          {/* <div id ="our-services" className="bg-cover bg-no-repeat bg-top w-screen h-max pt-10 pb-10" style={{ backgroundImage: `url(${OurServicesContent.data.background_image.url}`}}>
            <div className=" justify-items-start text-white text-4xl md:text-5xl font-roboto font-bold py-9 pl-6 md:pl-32">{OurServicesContent.data.title[0].text}</div>
            <div className="md:grid md:grid-cols-2 md:grid-rows-3">
              <div className="flex flex-col justify-center  text-white text-2xl md:text-3xl italic font-roboto pb-10 w-screen pl-6 md:order-2">{RichText.render(OurServicesContent.data.text_field_3)}</div>
              <div className="flex flex-col items-center md:justify-center pb-10 md:order-1 ">
                <Image src={OurServicesContent.data.icon_1.url} width="300" height="150"/>
              </div>
              <div className="flex flex-col justify-center  text-white text-2xl md:text-3xl italic font-roboto pb-10 pl-6 md:pl-32 md:order-3">{RichText.render(OurServicesContent.data.text_field_1)}</div>
              <div className="flex flex-col justify-center  text-white text-2xl md:text-3xl italic font-roboto  pl-6 md:pl-32 pb-10 md:order-5">{RichText.render(OurServicesContent.data.text_field_2)}</div>
              <div className="flex flex-col items-center text-white text-xl font-roboto pb-10 md:order-6  md:pr-44">
                <Image src={OurServicesContent.data.icon_2.url} width="300" height="150"/>          
              </div>
                <div className="flex flex-col justify-center  text-white text-2xl md:text-3xl italic font-roboto pl-6 md:order-4">{RichText.render(OurServicesContent.data.text_field_4)}</div>
            </div>
          </div> */}

          {/* Plans Section */}
          {/* <div id ="plans" className="bg-cover bg-no-repeat bg-top h-full pb-20 pt-10" style={{ backgroundImage: `url(${plansContent.data.background_image.url}`}}>
            <div className="text-white text-4xl md:text-5xl font-roboto font-bold py-9 pl-32">{plansContent.data.title[0].text}</div>
            <div className="md:flex md:place-content-center">

              <div className="pl-10 pr-10 pt-5 pb-5">
                <a href="#sign-up">
                  <div className="text-white font-roboto text-center hover:bg-indigo-900/50">
                      <div className="box-content p-4 border-2">
                        <div className="text-3xl font-bold">{plansContent.data.box1_title[0].text}</div>
                        <div className="text-4xl">{plansContent.data.box1_frecuency[0].text}</div>
                        <div className="text-5xl font-bold">{plansContent.data.box1_price[0].text}</div>
                        <div className="text-3xl font-bold">{plansContent.data.box1_quantity[0].text}</div>
                      </div>
                      <div className="bg-orange-400  text-white justify-center text-center font-bold">{plansContent.data.footer_box_message[0].text}</div>
                  </div>
                </a>
              </div>
              <div className="pl-10 pr-10 pt-5 pb-5">
                <a href="#sign-up">
                  <div className="text-white font-roboto text-center hover:bg-indigo-900/50" href="#sign-up">
                    <div className="box-content p-4 border-2">
                        <div className="text-3xl font-bold">{plansContent.data.box2_title[0].text}</div>
                        <div className="text-4xl">{plansContent.data.box2_frecuency[0].text}</div>
                        <div className="text-5xl font-bold">{plansContent.data.box2_price[0].text}</div>
                        <div className="text-3xl font-bold">{plansContent.data.box2_quantity[0].text}</div>
                    </div>
                    <div className="bg-orange-400  text-white justify-center text-center font-bold">{plansContent.data.footer_box_message[0].text}</div>
                  </div>
                </a>
              </div>
              <div className="pl-10 pr-10 pt-5 pb-5">
                <a href="#sign-up">
                  <div className="text-white font-roboto text-center hover:bg-indigo-900/50" href="#sign-up">
                    <div className="box-content md:h-40 md:w-44 p-4 border-2">
                        <div className=" text-3xl font-bold">{plansContent.data.box3_title[0].text}</div>
                        <div className="text-3xl">{plansContent.data.box3_frecuency[0].text}</div>
                        <div className="text-3xl font-bold">{plansContent.data.box3_price[0].text}</div>
                    </div>
                    <div className="bg-orange-400  text-white justify-center text-center font-bold">{plansContent.data.footer_box_message[0].text}</div>
                  </div>
                </a>
              </div>
          </div>
          <div className="flex items-center justify-center pt-12">
          <Modal PopupUrl = {plansContent.data.popup_button_url[0].text}/>
          </div>
          <div>
          </div>
          </div> */}

          {/* FAQ Section */}
          {/* <div id ="faq" className="bg-orange-400 h-full pt-20 pb-10 w-screen">
            <div className="flex justify-center space-x-6 p-8">
              <div className="flex flex-col justify-center  text-white text-xl md:text-3xl italic font-roboto">{RichText.render(FAQ.data.text_field_1)}</div>
            </div>
          </div> */}

          {/* Contact Section */}
          {/* <div id ="contact" className="bg-cover bg-no-repeat bg-top h-screen pt-10 w-screen" style={{ backgroundImage: `url(${contactContent.data.background_image.url}`}}>
              <div className="flex flex-col pl-10 md:pl-32 text-white text-4xl md:text-5xl italic font-roboto font-bold py-9">{contactContent.data.title[0].text}</div>
              <div className="flex flex-col pl-16 md:pl-50 text-white md:text-3xl italic font-roboto font-bold">
                <a href="tel:+1(407)561-9818">
                  {RichText.render(contactContent.data.number_field)}
                </a>
                <a href="mailto:DirtyBinBustersFL@gmail.com">
                  {RichText.render(contactContent.data.mail_field)}
                </a>
                {RichText.render(contactContent.data.days_field)}
                {RichText.render(contactContent.data.hours_field)}
              </div>
              <div className="mt-60 pl-60 self-end">
                <a href="#sign-up">
                  <div className="bg-orange-400  text-white justify-center text-center font-bold visible md:invisible">REQUEST INFO</div>
                </a>
              </div>
          </div> */}

          {/* Sign Up Section */}
          {/* <div id ="sign-up" className="bg-cover bg-no-repeat bg-top h-max pt-10 w-screen" style={{ backgroundImage: `url(${signUpContent.data.background_image.url}`}}>
              <div className="flex flex-col items-center text-white text-4xl italic font-roboto font-bold py-9 pl-8">{signUpContent.data.title[0].text}</div>
              <div className="md:flex justify-center p-8">
                <div className="text-white text-3xl italic font-roboto pr-20 pb-6 ">{RichText.render(signUpContent.data.text_field)}</div>
                <Contact signUpContent={signUpContent}/>
              </div>
              <div className="flex italic font-roboto text-xs md:text-sm pl-3 overflow-y-hidden">
                <p className="pt-4">
                  Dirty Bin Busters 2022 &nbsp;| &nbsp;Developed by&nbsp;
                  <a className="font-bold hover:text-cyan-600 " href="https://gluonico.com/">
                     Gluonico
                  </a>
                </p>
                <a className="pl-2 pt-3 md:pt-4 justify-end hover:scale-x-125  hover:scale-y-125" href="https://gluonico.com/">
                    <Image src="/static/Logo_Gluonico.png" width="20" height="20"/>
                </a>
              </div>
          </div> */}
          <div className="flex flex-col items-center mt-10">Developed by Gluonico</div>
        </div>
}

const getStaticProps = async ({ params }) => {
  return {
      props: {
        seo: await getPrismicData('seo'),
        generalInformation: await getPrismicData('general_information'),
        menuContent: await getPrismicData('menu'),
        // homeContent: await getPrismicData('homepage'),
        // WhoWeAreContent: await getPrismicData('who_we_are'),
        // OurServicesContent: await getPrismicData('our_services'),
        // FAQ: await getPrismicData('faq'), 
        // contactContent : await getPrismicData('contact'),
        // plansContent : await getPrismicData('plans'),
        // signUpContent : await getPrismicData('sign_up')
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

export default Homepage
export { getStaticProps }