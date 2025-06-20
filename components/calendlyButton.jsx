import * as React from "react";

const CalendlyButton = (props) => {
  const { ButtonMessage } = props;
  
  return (
    <div className="flex mt-10">
    <a href='https://www.calendly.com/vicecitylending' target="_blank" rel="noopener noreferrer">
      <button
        id="submitButton"
        className="font-bold border-4 border-white border-opacity-80 text-black relative z-10 bg-gradient-to-b from-yellow-200 to-yellow-800 hover:from-yellow-300 hover:to-yellow-800 active:from-yellow-400 active:to-yellow-700 uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 hover:scale-110 transition duration-500 cursor-pointer object-cover mr-5 ml-5"
        type="button"
        aria-label="Submit"
      >
        {ButtonMessage}

      </button>
    </a>
  </div>
  );
};

export default CalendlyButton;