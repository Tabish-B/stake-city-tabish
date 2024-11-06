import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Taskbar = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-sm sm:max-w-lg h-14 sm:h-16">
      <div className="relative flex items-center justify-center gap-x-2 sm:gap-x-4 bg-gradient-to-b from-[#494ebb]/75 to-[#212355]/25 w-full h-full rounded-t-[30px] sm:rounded-t-[50px] shadow-[0_6px_25px_rgba(0,0,0,0.6)] px-1 sm:px-2 overflow-visible">

        {/* Responsive Round Background */}
        <div className="absolute top-[-40px] sm:top-[-50px] md:top-[-60px] left-1/2 transform -translate-x-1/2 w-[150px] h-[75px] sm:w-[180px] sm:h-[90px] md:w-[240px] md:h-[120px] bg-gradient-to-b from-[#494ebb]/75 to-[#212355]/25 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-0"></div>

        {/* Other Taskbar Buttons */}
        <button className="bg-[#33669C] rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center items-center shadow-inner transition-transform duration-200 hover:scale-110 -translate-y-1/4 relative z-10">
          <img src="/tasks-icon.png" alt="Tasks" className="w-4/5 h-auto transform -translate-y-1/5 filter drop-shadow-[0_4px_2px_rgba(0,0,0,1)]" />
        </button>

        <button className="bg-[#33669C] rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center items-center shadow-inner transition-transform duration-200 hover:scale-110 -translate-y-1/4 relative z-10">
          <img src="/messages-icon.png" alt="Chat" className="w-4/5 h-auto transform -translate-y-1/5 filter drop-shadow-[0_4px_2px_rgba(0,0,0,1)]" />
        </button>

        <button className="bg-[#33669C] rounded-full w-14 h-14 sm:w-[80px] sm:h-[80px] md:w-[110px] md:h-[110px] flex justify-center items-center shadow-inner transition-transform duration-200 hover:scale-110 -translate-y-[15%] relative z-10">
          <img src="/avatar.svg" alt="Avatar" className="w-full h-auto transform -translate-y-1" />
        </button>

        <button className="bg-[#33669C] rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center items-center shadow-inner transition-transform duration-200 hover:scale-110 -translate-y-1/4 relative z-10">
          <img src="/release-stake-icon.png" alt="Release-Stake" className="w-4/5 h-auto transform -translate-y-1/5 filter drop-shadow-[0_4px_2px_rgba(0,0,0,1)]" />
        </button>

        <button className="bg-[#33669C] rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center items-center shadow-inner transition-transform duration-200 hover:scale-110 -translate-y-1/4 relative z-10">
          <img src="/settings-icon.png" alt="Settings" className="w-4/5 h-auto transform -translate-y-1/5 filter drop-shadow-[0_4px_2px_rgba(0,0,0,1)]" />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;