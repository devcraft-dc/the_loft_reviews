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
    <div className="grid grid-cols-3 gap-[3px] mt-[5.8rem] max-md:mt-[5.1rem] max-sm:mt-[4.35rem] mb-[5.4rem] max-md:mb-[5.1rem] max-sm:mb-[4.9rem]">
      {filteredFood.map((item) => (
        <div key={item.id}>
          <Card
            title={item.title}
            cat={'food'}
            image={item.image}
            position={item.position}
            path={`/${item.id}`}
          />
        </div>
      ))}
    </div>
  );
};
