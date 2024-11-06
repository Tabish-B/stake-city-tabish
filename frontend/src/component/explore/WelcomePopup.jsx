import React from 'react';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-[#222222] bg-opacity-10 text-[#34eb8f] p-8 sm:p-12 text-center rounded-lg border-2 border-dotted border-[#34eb8f] max-w-xs sm:max-w-md shadow-[0_0_20px_rgba(0,255,136,0.8)]">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome</h1>
        <p className="text-sm sm:text-base text-gray-300 mt-4">
          Explore the vast open-world map, complete various missions, and unlock hidden secrets along the way. Your journey will test your agility, strategy, and decision-making skills!
        </p>

        {/* Controls Section (only visible on larger screens) */}
        <div className="absolute top-1/2 transform -translate-y-1/2 lg:right-5 md:right-3 sm:right-2 bg-black bg-opacity-0 p-4 rounded-lg text-white hidden md:flex flex-col items-center space-y-6">
          {/* Move Controls */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Move</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-10 h-10 bg-transparent rounded-md"></div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">W</div>
              <div className="w-10 h-10 bg-transparent rounded-md"></div>

              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">A</div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">S</div>
              <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">D</div>
            </div>
          </div>

          {/* Map and Inventory Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Inventory</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">I</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Map</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">M</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Jump</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">J</div>
              </div>
            </div>
          </div>

          {/* Interact Section */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs px-3 py-1 rounded-full text-center border border-[#32EB8F] text-[#32EB8F]">Interact</p>
            <div className="w-10 h-10 flex items-center justify-center font-bold text-lg text-white rounded-md border border-white shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-gradient-to-br from-transparent to-white/20">E</div>
          </div>
        </div>

        <button
          className="mt-6 py-2 px-4 bg-[#34eb8f] text-[#222] rounded-md text-sm sm:text-base hover:bg-[#2bc176] transition duration-300"
          onClick={onClose}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;