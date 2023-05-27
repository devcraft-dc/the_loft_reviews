import { Card } from './Card';
import staff from '../assets/staff.json';

export const StaffContent = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[5.6rem] max-md:mt-[4.9rem] max-sm:mt-[4.1rem] mb-[6.6rem] max-md:mb-[5.8rem] max-md:my-[4.9rem] max-sm:mb-[5.1rem] max-sm:my-[4.15rem]">
    {staff.map((item) => (
      <Card key={item.title} title={item.title} image={item.image} />
    ))}
  </div>
);