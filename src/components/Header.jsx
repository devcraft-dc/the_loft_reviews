import food_icon from '../assets/food.svg';
import staff_icon from '../assets/staff.svg';
import userinfo_icon from '../assets/userinfo.svg';
import white_logo from '../assets/white_logo.png';

export const Header = () => (
  <header className="bg-main-black flex justify-between items-center h-[5.5rem] max-sm:h-[4.75rem] text-secondary-white px-5">
    <img
      className="w-15 h-11 max-md:w-13 max-md:h-8 max-sm:w-13 max-sm:h-7"
      src={white_logo}
      alt="logo"
    />

    <div className="flex gap-5 max-md:gap-4 p-3 m-3 border-x border-black border-opacity-25">
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

    <button>
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
);
