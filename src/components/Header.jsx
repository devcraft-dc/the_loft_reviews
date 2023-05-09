import { useState } from 'react';
import { UserInfo } from './UserInfo';
import food_icon from '../assets/food.svg';
import staff_icon from '../assets/staff.svg';
import userinfo_icon from '../assets/userinfo.svg';
import white_logo from '../assets/white_logo.png';
import { IconButton } from './IconButton';

const links = [
  { icon: food_icon, title: 'Еда' },
  { icon: staff_icon, title: 'Персонал' },
];

export const Header = () => {
  const [showUserinfo, setShowUserinfo] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0].title);

  return (
    <div className="fixed top-0 w-[500px] max-lg:w-full">
      <header className="bg-main-black flex justify-between items-center text-secondary-white py-4 max-md:py-3 max-sm:py-2 px-5">
        <img
          className="w-15 h-11 max-md:w-13 max-md:h-8 max-sm:w-13 max-sm:h-7"
          src={white_logo}
          alt="logo"
        />

        <div className="flex gap-5 max-md:gap-4 border-x px-3 mx-3 border-secondary-white border-opacity-10">
          {links.map((link) => (
            <IconButton
              key={link.title}
              icon={link.icon}
              title={link.title}
              isActive={activeLink === link.title}
              onClick={() => setActiveLink(link.title)}
            />
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
