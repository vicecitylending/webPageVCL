import React, { useState, useEffect } from "react";
import Contact from "./contact";

const Modal = ({ Texto1, Texto2, signUpContent }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const openPopupAfterOneMinute = setTimeout(() => {
      setShowPopup(true);
    }, 60000); // 1 minute

    const openPopupAgainAfterFiveMinutes = setTimeout(() => {
      if (!showPopup) {
        setShowPopup(true);
      }
    }, 300000); // 5 minutes

    return () => {
      clearTimeout(openPopupAfterOneMinute);
      clearTimeout(openPopupAgainAfterFiveMinutes);
    };
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <div className="">
      <button
        id="submitButton"
        className="bg-orange-400 text-white active:bg-orange-500 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={openPopup}
      >
        Get your Loan
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 ">
          <div className="bg-black rounded-lg p-8 popup">
            <button
              id="closeButton"
              className="bg-black text-white rounded-full relative -top-11"
              onClick={closePopup}
            >
            <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.293 5.293a1 1 0 0 0-1.414 0L12 10.586 7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12l4.293-4.293a1 1 0 0 0 0-1.414z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="text-white -mt-10 text-xl">Let's connect to find out what is your purchasing power!</h2>

            <div className="h-full w-full">
              <Contact signUpContent={signUpContent.data}></Contact>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;