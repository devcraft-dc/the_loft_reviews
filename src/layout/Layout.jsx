import { useEffect, useState } from 'react';
import { WelcomeModal } from '../components/WelcomeModal';
import { Header } from '../layout/Header';
import { CategoryFilter } from './CategoryFilter';
import { useLocation } from 'react-router-dom';
import { containsNumbers } from '../utils/containsNumbers';

export const Layout = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);
  const { pathname } = useLocation();
  const isMenuPage = pathname === '/';
  const isThanksPage = pathname === '/thanks';
  const isReviewPage = containsNumbers(pathname);

  useEffect(() => {
    if (modalActive) {
      document.body.classList.add('overflow-hidden');
    }

    document.addEventListener('DOMContentLoaded', () => localStorage.clear());

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('DOMContentLoaded', () =>
        localStorage.clear()
      );
    };
  }, [modalActive]);

  if (isThanksPage || isReviewPage) {
    return <div className="w-[500px] max-lg:w-full">{children}</div>;
  }

  return (
    <>
      {modalActive && <WelcomeModal setModalActive={setModalActive} />}

      <div className="w-[500px] max-lg:w-full">
        <Header />
        {children}
        {isMenuPage && <CategoryFilter />}
      </div>
    </>
  );
};
