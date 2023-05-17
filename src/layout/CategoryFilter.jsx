import { useContext } from 'react';
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
