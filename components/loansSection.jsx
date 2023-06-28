import React from "react";
import LoansGrid from "./molecules/loansGrid";
import NonQMLoansGrid from "./molecules/NonQmLoansGrid";

const LoansSection = props => {
    const { RealtorsContent, QmLoans, NonQmLoans } = props
  return (
    <div className="flex flex-col items-center w-full sm:mb-32">
    <div id ="loan" className="pr-5 pl-5 sm:pt-20 pt-32 xl:w-1/2 w-full h-full">
      <div className="flex flex-col justify-center">
        <div className="text-white text-2xl sm:text-4xl pb-5 font-semibold">{RealtorsContent.data.title}</div>
        <div className="text-white text-l sm:text-2xl text-justify">{RealtorsContent.data.text}</div>
        <div className="self-center">
          <div className="flex">
            <LoansGrid Loans={QmLoans}/>
          </div>
        </div>
        <div className="self-center">
          <div className="flex">
            <NonQMLoansGrid nonQmLoans={NonQmLoans}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoansSection;