import { useState } from 'react';
import { UserInfo } from './UserInfo';
import food_icon from '../assets/food.svg';
import staff_icon from '../assets/staff.svg';
import userinfo_icon from '../assets/userinfo.svg';
import white_logo from '../assets/white_logo.png';

export const Header = () => {
  const [showUserinfo, setShowUserinfo] = useState(false);

  return (
    <div className="fixed top-0 w-[500px] max-lg:w-full">
      <header className="bg-main-black flex justify-between items-center text-secondary-white py-4 max-md:py-3 max-sm:py-2 px-5">
        <img
          className="w-15 h-11 max-md:w-13 max-md:h-8 max-sm:w-13 max-sm:h-7"
          src={white_logo}
          alt="logo"
        />

        <div className="flex gap-5 max-md:gap-4 border-x px-3 mx-3 border-secondary-white border-opacity-10">
          <button>
            <img
              className="w-8 mx-auto max-md:w-7 max-sm:w-6"
              src={food_icon}
              alt="food"
            />
            <span className="text-sm max-md:text-xs max-sm:text-[0.65rem] ">
              Еда
            </span>
          </button>
          <button>
            <img
              className="w-8 mx-auto max-md:w-7 max-sm:w-6"
              src={staff_icon}
              alt="staff"
            />
            <span className="text-sm max-md:text-xs max-sm:text-[0.65rem]">
              Персонал
            </span>
          </button>
        </div>

        <button onClick={() => setShowUserinfo(!showUserinfo)}>
          <img
            className="w-8 mx-auto max-md:w-7 max-sm:w-6"
            src={userinfo_icon}
            alt="userinfo"
          />
          <span className="text-sm max-md:text-xs max-sm:text-[0.65rem]">
            Данные
          </span>
        </button>
      </header>
      {showUserinfo && <UserInfo setShowUserinfo={setShowUserinfo} />}
    </div>
  );
};
