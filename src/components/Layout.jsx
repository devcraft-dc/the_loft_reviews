import { Header } from './Header';
import { CategoryFilter } from './CategoryFilter';

export const Layout = ({ children }) => (
  <div className="w-[500px] max-lg:w-full">
    <Header />
    {children}
    <CategoryFilter />
  </div>
);
