import { Card } from './Card';
import img from '../assets/img.png';

const arr = Array.from(Array(24).keys());

export const Content = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[5.65rem] max-md:mt-[4.9rem] max-sm:mt-[4.25rem] mb-[5.9rem] max-md:my-[4.9rem] max-sm:my-[4.15rem]">
    {arr.map((item) => (
      <Card key={item} title="Бюдо" image={img} />
    ))}
  </div>
);
