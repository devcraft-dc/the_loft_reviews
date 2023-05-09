import { useState } from 'react';
import cake from '../assets/cake.svg';
import drink from '../assets/drink.svg';
import soup from '../assets/soup.svg';
import sushi from '../assets/sushi.svg';
import grill from '../assets/grill.svg';
import mountain from '../assets/mountain.svg';
import fastfood from '../assets/fastfood.svg';
import { Search } from './Search';
import { IconButton } from './IconButton';

const icons = [
  { icon: cake, title: 'Десерты' },
  { icon: drink, title: 'Напитки' },
  { icon: soup, title: 'Супы' },
  { icon: sushi, title: 'Азия' },
  { icon: grill, title: 'Мангал' },
  { icon: mountain, title: 'Нац.кухня' },
  { icon: fastfood, title: 'Фастфуд' },
];

export const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleActiveCategory = (category) => {
    if (activeCategory) {
      if (activeCategory === category) {
        setActiveCategory(null);
      } else {
        setActiveCategory(category);
      }
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="fixed bottom-0 w-[500px] max-lg:w-full">
      <Search />
      <div className="flex gap-6 p-5 max-md:p-4 max-sm:p-3 items-end bg-main-black overflow-x-auto scrollbar-thin scrollbar-thumb-main-black scrollbar-track-secondary-white scrollbar-thumb-rounded-md text-secondary-white">
        {icons.map((icon) => (
          <IconButton
            key={icon.title}
            icon={icon.icon}
            title={icon.title}
            isActive={icon.title === activeCategory}
            onClick={() => toggleActiveCategory(icon.title)}
          />
        ))}
      </div>
    </div>
  );
};
