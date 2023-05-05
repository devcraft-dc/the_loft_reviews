import { Card } from './Card';
import img from '../assets/img.png';

const arr = Array.from(Array(24).keys());

export const Content = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[3px]">
    {arr.map((item) => (
      <Card key={item} title="Бюдо" image={img} />
    ))}
  </div>
);
