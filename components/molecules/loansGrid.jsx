import React from "react";
import Image from 'next/image'
import LoanCircle from "../atoms/loanCIrcle";


const LoansGrid = props => {
  const { qmLoans } = props
  return (
    <div className="flex w-full h-full items-center mt-10 mb-20">
    <div className="flex flex-col">
      <div className="text-white text-lg font-bold">
        {"QM QUALIFIED MORTGAGE LOANS "}
      </div>
      <div className="text-white text-xs mb-10">
        {"A QM loan is a type of mortgage loan that meets certain standards and requirements set by the Consumer Financial Protection Bureau (CFPB) in the United States. These loans are designed to ensure the borrower's ability to repay and provide consumer protection."}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <LoanCircle imageSource={qmLoans.data.loan1_image.url}
                    imageAlt={qmLoans.data.loan1_image.alt}
                    title={qmLoans.data.loan1_title}
                    description={qmLoans.data.loan1_description}
                    />
        <LoanCircle imageSource={qmLoans.data.loan2_image.url}
              imageAlt={qmLoans.data.loan2_image.alt}
              title={qmLoans.data.loan2_title}
              description={qmLoans.data.loan2_description}
              />      
        <LoanCircle imageSource={qmLoans.data.loan3_image.url}
              imageAlt={qmLoans.data.loan3_image.alt}
              title={qmLoans.data.loan3_title}
              description={qmLoans.data.loan3_description}
              />
        <LoanCircle imageSource={qmLoans.data.loan4_image.url}
              imageAlt={qmLoans.data.loan4_image.alt}
              title={qmLoans.data.loan4_title}
              description={qmLoans.data.loan4_description}
        />
        <LoanCircle imageSource={qmLoans.data.loan5_image.url}
                    imageAlt={qmLoans.data.loan5_image.alt}
                    title={qmLoans.data.loan5_title}
                    description={qmLoans.data.loan5_description}
                    />
      </div>
    </div>


  </div>
  );
};

export default LoansGrid;