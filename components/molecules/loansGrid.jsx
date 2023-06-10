import React from "react";
import Image from 'next/image'


const LoansGrid = props => {
    const { content } = props
  return (
    <div className="flex">
    <div className="pt-10 sm:pr-32 pr-5">
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
    </div>
  </div>
  );
};

export default LoansGrid;