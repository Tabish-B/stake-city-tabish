// ControlsOverlay.jsx
import React from 'react';

const ControlsOverlay = () => {
    return (
        <div className="absolute right-5 top-24 bg-black bg-opacity-50 p-4 rounded-lg text-white flex flex-col items-center space-y-4">
            {/* Move Section */}
            <div className="flex flex-col items-center space-y-2">
                <p className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full text-center">Move</p>
                <div className="grid grid-cols-3 gap-2">
                    {/* Empty placeholders for alignment */}
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md"></div>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">W</div>
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md"></div>

                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">A</div>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">S</div>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">D</div>
                </div>
            </div>

            {/* Map and Inventory Section */}
            <div className="flex flex-col items-center space-y-2">
                <div className="grid grid-cols-3 gap-2">
                    <p className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full text-center">Inventory</p>
                    <p className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full text-center">Map</p>
                    <p className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full text-center">Jump</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">I</div>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">M</div>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">J</div>
                </div>
            </div>

            {/* Interact Section */}
            <div className="flex flex-col items-center space-y-2">
                <p className="text-xs bg-emerald-500 text-black px-3 py-1 rounded-full text-center">Interact</p>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg bg-white bg-opacity-80 rounded-md text-gray-800">E</div>
            </div>
        </div>
    );
};

export default ControlsOverlay;