import React from "react";
import Image from 'next/image'
import LoansGrid from "./molecules/loansGrid";


const LoansSection = props => {
    const { RealtorsContent, QmLoans } = props
    console.log(QmLoans)
  return (
    <div className="flex flex-col items-center w-full sm:mb-32 mb-32 ">
    <div id ="loan" className="pr-5 pl-5 sm:pt-20 pt-32 sm:w-1/2 w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="text-white text-2xl sm:text-4xl pb-5 font-semibold">{RealtorsContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl">{RealtorsContent.data.text}</div>
        <div className="self-center">
          <div className="flex">
            <LoansGrid qmLoans={QmLoans}/>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default LoansSection;