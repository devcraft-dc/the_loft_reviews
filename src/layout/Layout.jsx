import { useState } from 'react';
import { WelcomeModal } from '../components/WelcomeModal';
import { Header } from '../layout/Header';
import { CategoryFilter } from './CategoryFilter';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);
  const { pathname } = useLocation();
  const isMenuPage = pathname.includes('staff');
  const modalChecked = localStorage.getItem('modalChecked');

  return (
    <>
      {modalActive && (modalChecked === 'false' || modalChecked === null) && (
        <WelcomeModal setModalActive={setModalActive} />
      )}
      <div className="w-[500px] max-lg:w-full">
        <Header />
        {children}
        {!isMenuPage && <CategoryFilter />}
      </div>
    </>
  );
};
