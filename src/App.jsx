import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { StaffPage } from './pages/StaffPage';
import { useState } from 'react';
import { Context } from './context';
import { WelcomeModal } from './components/WelcomeModal';

function App() {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const modalChecked = localStorage.getItem('modalChecked')
    ? localStorage.getItem('modalChecked')
    : false;
  const [modalActive, setModalActive] = useState(modalChecked);

  return (
    <Context.Provider
      value={{ searchText, setSearchText, activeCategory, setActiveCategory }}
    >
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {!modalActive && (
                  <WelcomeModal setModalActive={setModalActive} />
                )}
                <MenuPage />
              </>
            }
          />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
