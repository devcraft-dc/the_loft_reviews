import { Card } from './Card';
import food from '../assets/food.json';

export const Content = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[5.8rem] max-md:mt-[5.1rem] max-sm:mt-[4.4rem] mb-[6.5rem] max-md:mb-[6rem] max-md:my-[4.9rem] max-sm:my-[4.15rem]">
    {food.map((item) => (
      <Card key={item.title} title={item.title} image={item.image} />
    ))}
  </div>
);
