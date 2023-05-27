import { useContext } from 'react';
import all from '../assets/icons/all.svg';
import cake from '../assets/icons/cake.svg';
import drink from '../assets/icons/drink.svg';
import euro_food from '../assets/icons/euro_food.svg';
import soup from '../assets/icons/soup.svg';
import sushi from '../assets/icons/sushi.svg';
import grill from '../assets/icons/grill.svg';
import mountain from '../assets/icons/mountain.svg';
import fastfood from '../assets/icons/fastfood.svg';
import salad from '../assets/icons/salad.svg';
import { Search } from '../components/Search';
import { IconButton } from '../components/IconButton';
import { Context } from '../context';

const icons = [
  { icon: all, title: 'Все' },
  { icon: sushi, title: 'Азия' },
  { icon: euro_food, title: 'Евро' },
  { icon: soup, title: 'Супы' },
  { icon: mountain, title: 'Нац.кухня' },
  { icon: grill, title: 'Мангал' },
  { icon: salad, title: 'Салаты' },
  { icon: fastfood, title: 'Фастфуд' },
  { icon: cake, title: 'Десерты' },
  { icon: drink, title: 'Напитки' },
];

export const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);

  const toggleActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="fixed bottom-0 w-[500px] max-lg:w-full">
      <Search />
      <div className="grid grid-flow-col gap-2 p-3 pt-4 bg-main-black overflow-x-auto scrollbar-thin scrollbar-thumb-main-black scrollbar-track-secondary-white scrollbar-thumb-rounded-md text-secondary-white">
        {icons.map((icon) => (
          <div
            key={icon.title}
            className="w-[70px] max-md:w-[55px] max-sm:w-[45px] text-center"
          >
            <IconButton
              icon={icon.icon}
              title={icon.title}
              isActive={icon.title === activeCategory}
              onClick={() => toggleActiveCategory(icon.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
