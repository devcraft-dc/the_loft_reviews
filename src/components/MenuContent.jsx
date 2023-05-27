import { useContext } from 'react';
import { Card } from './Card';
import { Context } from '../context';
import { NothingFound } from './NothingFound';
import food from '../assets/food.json';

export const MenuContent = () => {
  const { searchText, activeCategory } = useContext(Context);

  const filteredFood = food.filter((dish) => {
    const dishTitle = dish.title.toUpperCase();
    const searchQuery = searchText.toUpperCase();

    if (activeCategory && activeCategory !== 'Все') {
      return (
        dishTitle.includes(searchQuery) && dish.category === activeCategory
      );
    }

    return dishTitle.includes(searchQuery);
  });

  if (!filteredFood.length) {
    return <NothingFound />;
  }

  return (
    <div className="grid grid-cols-3 gap-[3px] mt-[5.6rem] max-md:mt-[4.9rem] max-sm:mt-[4.1rem] mb-[6.6rem] max-md:mb-[5.8rem] max-md:my-[4.9rem] max-sm:mb-[5.1rem] max-sm:my-[4.15rem]">
      {filteredFood.map((item) => (
        <Card key={item.title} title={item.title} image={item.image} />
      ))}
    </div>
  );
};
