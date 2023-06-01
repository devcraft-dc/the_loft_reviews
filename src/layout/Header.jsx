import food_icon from '../assets/icons/food.svg';
import staff_icon from '../assets/icons/staff.svg';
import white_logo from '../assets/white_logo.png';
import reviews_icon from '../assets/icons/reviews_icon.svg';
import { IconButton } from '../components/IconButton';
import { NavLink } from 'react-router-dom';
import { saveCategoryToLS } from '../utils/saveCategoryToLS';

const links = [
  { icon: food_icon, title: 'Меню', link: '/' },
  { icon: staff_icon, title: 'Персонал', link: '/staff' },
  { icon: reviews_icon, title: 'Другое', link: '/other' },
];

export const Header = () => (
  <div className="fixed top-0 z-40 w-[500px] max-lg:w-full">
    <header className="bg-main-black flex justify-between items-center border-b-[3px] text-secondary-white py-4 max-md:py-3 max-sm:py-2 px-5">
      <img
        className="w-15 h-11 max-md:w-13 max-md:h-8 max-sm:w-13 max-sm:h-7"
        src={white_logo}
        alt="logo"
      />

      <div className="flex gap-5 max-md:gap-4 relative">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'after:content-[""] after:block after:bottom-[-3px] after:w-full after:h-[3px] after:bg-secondary-white'
                : undefined
            }
            key={link.title}
            to={link.link}
            onClick={() => saveCategoryToLS('other')}
          >
            <IconButton icon={link.icon} title={link.title} />
          </NavLink>
        ))}
      </div>
    </header>
  </div>
);
