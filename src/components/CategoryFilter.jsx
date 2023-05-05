import cake from '../assets/cake.svg';
import drink from '../assets/drink.svg';
import soup from '../assets/soup.svg';
import sushi from '../assets/sushi.svg';
import grill from '../assets/grill.svg';
import mountain from '../assets/mountain.svg';
import fastfood from '../assets/fastfood.svg';
import { Search } from './Search';

const icons = [
  { icon: cake, title: 'Десерты' },
  { icon: drink, title: 'Напитки' },
  { icon: soup, title: 'Супы' },
  { icon: sushi, title: 'Азия' },
  { icon: grill, title: 'Мангал' },
  { icon: mountain, title: 'Нац.кухня' },
  { icon: fastfood, title: 'Фастфуд' },
];

export const CategoryFilter = () => (
  <>
    <Search />
    <div className="fixed max-w-[500px] bottom-0 flex gap-6 p-5 max-md:p-4 max-sm:p-3 items-end bg-main-black overflow-x-auto scrollbar-thin scrollbar-thumb-main-black scrollbar-track-secondary-white scrollbar-thumb-rounded-md">
      {icons.map((icon) => (
        <button key={icon.title} type="button">
          <img
            src={icon.icon}
            alt={icon.title}
            className="w-8 max-md:w-7 max-sm:w-6 mx-auto"
          />
          <p className="text-secondary-white text-center text-sm max-md:text-xs max-sm:text-[0.65rem]">
            {icon.title}
          </p>
        </button>
      ))}
    </div>
  </>
);
