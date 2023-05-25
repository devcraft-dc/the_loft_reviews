import { useState } from 'react';
import { UserInfo } from '../components/UserInfo';
import food_icon from '../assets/icons/food.svg';
import staff_icon from '../assets/icons/staff.svg';
import userinfo_icon from '../assets/icons/userinfo.svg';
import white_logo from '../assets/white_logo.png';
import { IconButton } from '../components/IconButton';
import { NavLink } from 'react-router-dom';

const links = [
  { icon: food_icon, title: 'Меню', link: '/' },
  { icon: staff_icon, title: 'Персонал', link: '/staff' },
];

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

        <div className="flex gap-5 max-md:gap-4 border-x px-3 mx-3 border-secondary-white border-opacity-10 relative">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive &&
                'after:content-[""] after:block after:bottom-[-3px] after:w-full after:h-[3px] after:bg-secondary-white'
              }
              key={link.title}
              to={link.link}
            >
              <IconButton icon={link.icon} title={link.title} />
            </NavLink>
          ))}
        </div>

        <IconButton
          icon={userinfo_icon}
          title="Данные"
          onClick={() => setShowUserinfo(!showUserinfo)}
          isActive={showUserinfo}
        />
      </header>
      {showUserinfo && <UserInfo setShowUserinfo={setShowUserinfo} />}
    </div>
  );
};
