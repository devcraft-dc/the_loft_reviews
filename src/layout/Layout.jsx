import { Header } from '../layout/Header';
import { CategoryFilter } from './CategoryFilter';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isMenuPage = pathname.includes('staff');
  return (
    <div className="w-[500px] max-lg:w-full">
      <Header />
      {children}
      {!isMenuPage && <CategoryFilter />}
    </div>
  );
};
