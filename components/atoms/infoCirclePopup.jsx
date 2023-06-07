import React, { useRef, useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const InfoCirclePopup = () => {
    const [showPopup, setShowPopup] = React.useState(false);
  
    // Función para mostrar u ocultar el pop-up
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <div className="relative">
        {/* Icono del círculo de información */}
        <div
          className="rounded-full bg-white w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={togglePopup}
        >
          <span className="text-lg text-gray-600">?</span>
        </div>
  
        {/* Pop-up */}
        {showPopup && (
          <div className="absolute bg-white p-4 rounded-md shadow-lg">
            <p>Aquí va la información del dato.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default InfoCirclePopup;