import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ user }) => {
  return (
    <div className="absolute top-5 left-5 flex flex-col sm:flex-row items-center bg-black bg-opacity-70 p-2 sm:p-3 rounded-lg z-50 text-white select-none space-y-2 sm:space-y-0 sm:space-x-3 max-w-[180px] sm:max-w-none">
      <div>
        <Link to="/userdashboard">
          <img
            src={user ? user.avatar : '/avatar.svg'}
            alt={`${user ? user.user_name : ''}'s avatar`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="text-base sm:text-lg font-bold">{user ? user.full_name : ''}</div>
        <div className="text-xs sm:text-sm text-[#34eb8f]">Level {user ? user.level : ''}</div>
        <div className="w-full mt-1">
          {/* Progress bar */}
          <div className="w-20 sm:w-24 h-2 bg-gray-600 rounded-full overflow-hidden mx-auto sm:mx-0">
            <div
              className="h-full bg-[#34eb8f] transition-width duration-300"
              style={{ width: `${((user ? user.level : 0) % 1) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;