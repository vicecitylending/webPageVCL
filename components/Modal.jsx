import React from "react";

const Modal = props => {

  const { PopupUrl } = props
  return (
    <>
      <button
        className="bg-orange-400 text-white active:bg-orange-500 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => window.open(`${PopupUrl}`, "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}
      >
        SCHEDULE ONLINE NOW
      </button>
    </>
  );
}
export default Modal;