import React from "react";
import { useRouter } from 'next/router';



const ViceButton = props => {
    const { buttonText, actualLanguage } = props
    const router = useRouter();
  return (
    <div className="">
      <button
        id="submitButton"
        className="bg-orange-400 text-white active:bg-orange-500 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110 transition duration-500 cursor-pointer object-cover"
        type="button"
        onClick={() => router.push(`/${actualLanguage}/simulator`)}
        aria-label="Submit"
        >
        {buttonText}
      </button>
    </div>
  );
};

export default ViceButton;


