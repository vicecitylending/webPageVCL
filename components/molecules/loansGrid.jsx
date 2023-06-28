import React from "react";
import LoanCircle from "../atoms/loanCIrcle";


const LoansGrid = props => {
  const { Loans } = props
  return (
    <div className="flex w-full h-full items-center mt-10 mb-20">
    <div className="flex flex-col">
      <div className="text-white sm:text-2xl font-bold">
        {Loans.data.title_text}
      </div>
      <div className="text-white sm:text-2xl mb-10 text-justify">
        {Loans.data.subtitle_text}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <LoanCircle
              imageSource={Loans.data.loan1_image.url}
              imageAlt={Loans.data.loan1_image.alt}
              title={Loans.data.loan1_title}
              description={Loans.data.loan1_description}
              />
        <LoanCircle
              imageSource={Loans.data.loan2_image.url}
              imageAlt={Loans.data.loan2_image.alt}
              title={Loans.data.loan2_title}
              description={Loans.data.loan2_description}
              />      
        <LoanCircle
              imageSource={Loans.data.loan3_image.url}
              imageAlt={Loans.data.loan3_image.alt}
              title={Loans.data.loan3_title}
              description={Loans.data.loan3_description}
              />
        <LoanCircle
              imageSource={Loans.data.loan4_image.url}
              imageAlt={Loans.data.loan4_image.alt}
              title={Loans.data.loan4_title}
              description={Loans.data.loan4_description}
        />

      </div>
      <div className="flex w-full h-full items-center mt-20 mb-20">
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-1">
              <div className="3xl:translate-x-60 2xl:translate-x-48 xl:translate-x-40 lg:translate-x-56 md:translate-x-44 sm:translate-x-36 translate-x-20">
                <LoanCircle
                  imageSource={Loans.data.loan5_image.url}
                  imageAlt={Loans.data.loan5_image.alt}
                  title={Loans.data.loan5_title}
                  description={Loans.data.loan5_description}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoansGrid;