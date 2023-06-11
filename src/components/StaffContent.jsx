import { Card } from './Card';
import staff from '../assets/staff.json';

export const StaffContent = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[5.8rem] max-md:mt-[5.1rem] max-sm:mt-[4.35rem] mb-[5.4rem] max-md:mb-[5.1rem] max-sm:mb-[4.9rem]">
    {staff.map((item) => (
      <div key={item.id}>
        <Card
          title={item.title}
          cat={'staff'}
          image={item.image}
          position={item.position}
          path={`/staff/${item.id}`}
        />
      </div>
    ))}
  </div>
);
