import React from "react";
import Image from 'next/image'
import LoanCircle from "../atoms/loanCIrcle";


const LoansGrid = props => {
  const { qmLoans } = props
  return (
    <div className="flex w-full itmes-center mt-10">


    <LoanCircle imageSource={qmLoans.data.loan1_image.url}
                imageAlt={qmLoans.data.loan1_image.alt}
                title={qmLoans.data.loan1_title}
                description={qmLoans.data.loan1_description}
                />
    {/* <div className="pt-10 sm:pr-32 pr-5">
      <Image  className=""
              src={RealtorsContent.data.icon1.url}
              alt={RealtorsContent.data.icon1.alt} 
              width={200}
              height={200}
        />
    </div>
    <div className="pt-10 sm:pl-32 pl-5">
      <Image  className=""
              src={RealtorsContent.data.icon2.url}
              alt={RealtorsContent.data.icon2.alt} 
              width={200}
              height={200}
        />
    </div> */}
  </div>
  );
};

export default LoansGrid;