import { Card } from './Card';
import staff from '../assets/staff.json';
import { Link } from 'react-router-dom';
import { saveTargetInLS } from '../utils/saveTargetInLS';

export const StaffContent = () => (
  <div className="grid grid-cols-3 gap-[3px] mt-[5.6rem] max-md:mt-[4.9rem] max-sm:mt-[4.1rem] mb-[6.6rem] max-md:mb-[5.8rem] max-md:my-[4.9rem] max-sm:mb-[5.1rem] max-sm:my-[4.15rem]">
    {staff.map((item) => (
      <Link
        to={`/staff/${item.id}`}
        key={item.id}
        onClick={() => saveTargetInLS(item.title, 'staff')}
        style={{contain: "content"}}
      >
        <Card title={item.title} image={item.image} position={item.position} />
      </Link>
    ))}
  </div>
);
