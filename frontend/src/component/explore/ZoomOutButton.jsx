import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';  // Importing a thinner home icon

const ZoomAndBackButtons = ({ onZoomReset }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Home Button on the left */}
      <div
        className="fixed bottom-20 left-5 sm:bottom-5 sm:left-5 md:bottom-20 md:left-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#33669C]/35 rounded-full p-1 text-white flex justify-center items-center cursor-pointer shadow-inner transition-transform duration-200 z-50 hover:scale-110"
        onClick={() => navigate('/')}  // Navigate to home page
      >
        <FiHome className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Zoom Out Button on the right */}
      <div
        className="fixed bottom-20 right-5 sm:bottom-5 sm:right-5 md:bottom-20 md:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#33669C]/35 rounded-full p-1 text-white flex justify-center items-center cursor-pointer shadow-inner transition-transform duration-200 z-50 hover:scale-110"
        onClick={onZoomReset}
      >
        <span className="text-white text-lg sm:text-xl">⤢</span> {/* Zoom out symbol */}
      </div>
    </>
  );
};

export default ZoomAndBackButtons;