import React from 'react';
import '../styles/welcomepopup.css';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="welcome-popup-overlay">
      <div className="welcome-popup-content">
        <h1>Welcome</h1>
        <p>
          Explore the vast open-world map, complete various missions, and unlock hidden secrets along the way. Your journey will test your agility, strategy, and decision-making skills!
        </p>

        {/* Controls Section (visible only on PC) */}
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-0 p-4 rounded-lg text-white flex flex-col items-center space-y-6 md:block hidden">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Move</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-10 h-10 bg-transparent rounded-md"></div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>W</div>
              <div className="w-10 h-10 bg-transparent rounded-md"></div>

              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>A</div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>S</div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>D</div>
            </div>
          </div>

          {/* Map and Inventory Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Inventory</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>I</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Map</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>M</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Jump</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>J</div>
              </div>
            </div>
          </div>

          {/* Interact Section */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Interact</p>
            <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))' }}>E</div>
          </div>
        </div>

        <button className="close-popup-button" onClick={onClose}>Start Exploring</button>
      </div>
    </div>
  );
};

export default WelcomePopup;