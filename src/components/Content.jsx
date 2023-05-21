import { useContext, useState, useEffect } from 'react';
import { Card } from './Card';
import { Context } from '../context';
import { NothingFound } from './NothingFound';
import { debounce } from 'lodash';

export const Content = ({ content }) => {
  const { searchText, activeCategory } = useContext(Context);
  const [filteredFood, setFilterdFood] = useState([]);

  const debouncedFilter = debounce(() => {
    const filteredFood = content.filter((dish) => {
      const dishTitle = dish.title.toUpperCase();
      const searchQuery = searchText.toUpperCase();

      if (activeCategory) {
        return (
          dishTitle.includes(searchQuery) && dish.category === activeCategory
        );
      }

      return dishTitle.includes(searchQuery);
    });
    setFilterdFood(filteredFood);
  }, 300);

  useEffect(() => {
    const timeout = setTimeout(() => debouncedFilter(), 300);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, activeCategory]);

  return (
    <div className="grid grid-cols-3 gap-[3px] mt-[5.6rem] max-md:mt-[4.9rem] max-sm:mt-[4.1rem] mb-[6.6rem] max-md:mb-[5.8rem] max-md:my-[4.9rem] max-sm:mb-[5.1rem] max-sm:my-[4.15rem]">
      {filteredFood.map((item) => (
        <Card key={item.title} title={item.title} image={item.image} />
      ))}
      {filteredFood.length === 0 && <NothingFound />}
    </div>
  );
};
