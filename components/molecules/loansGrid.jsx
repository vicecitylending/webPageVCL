import React from "react";
import LoanCircle from "../atoms/loanCIrcle";


const LoansGrid = props => {
  const { qmLoans } = props
  return (
    <div className="flex w-full h-full items-center mt-10 mb-20">
    <div className="flex flex-col">
      <div className="text-white sm:text-2xl font-bold">
        {qmLoans.data.title_text}
      </div>
      <div className="text-white sm:text-2xl mb-10">
        {qmLoans.data.subtitle_text}
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