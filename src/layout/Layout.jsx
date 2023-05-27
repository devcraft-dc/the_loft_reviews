import { useState } from 'react';
import { WelcomeModal } from '../components/WelcomeModal';
import { Header } from '../layout/Header';
import { CategoryFilter } from './CategoryFilter';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);
  const { pathname } = useLocation();
  const isMenuPage = pathname.includes('staff');
  const isReviewPage = containsNumbers(pathname);
  const modalChecked = localStorage.getItem('modalChecked');

  function containsNumbers(str) {
    return /\d/.test(str);
  }

  return (
    <>
      {modalActive && (modalChecked === 'false' || modalChecked === null) && (
        <WelcomeModal setModalActive={setModalActive} />
      )}
      {isReviewPage ? (
        <div className="w-[500px] max-lg:w-full">{children}</div>
      ) : (
        <div className="w-[500px] max-lg:w-full">
          <Header />
          {children}
          {!isMenuPage && <CategoryFilter />}
        </div>
      )}
    </>
  );
};
