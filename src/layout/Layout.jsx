import { useEffect, useState } from 'react';
import { WelcomeModal } from '../components/WelcomeModal';
import { Header } from '../layout/Header';
import { CategoryFilter } from './CategoryFilter';
import { useLocation } from 'react-router-dom';
import { containsNumbers } from '../utils/containsNumbers';

export const Layout = ({ children }) => {
  const [modalActive, setModalActive] = useState(true);
  const { pathname } = useLocation();
  const isStaffPage = pathname.includes('staff');
  const isOtherPage = pathname.includes('other');
  const isReviewPage = containsNumbers(pathname);

  useEffect(() => {
    if (modalActive) {
      document.body.classList.add('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [modalActive]);

  return (
    <>
      {modalActive && !isReviewPage && (
        <WelcomeModal setModalActive={setModalActive} />
      )}

      {isReviewPage ? (
        <div className="w-[500px] max-lg:w-full">{children}</div>
      ) : (
        <div className="w-[500px] max-lg:w-full">
          <Header />
          {children}
          {!isStaffPage && !isOtherPage && <CategoryFilter />}
        </div>
      )}
    </>
  );
};
