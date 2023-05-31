import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { StaffPage } from './pages/StaffPage';
import { useState } from 'react';
import { Context } from './context';
import { MenuReview } from './pages/MenuReview';
import { StaffReview } from './pages/StaffReview';
import ScrollToTop from './components/scrollToTop';

function App() {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');

  return (
    <Context.Provider
      value={{ searchText, setSearchText, activeCategory, setActiveCategory }}
    >
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/:id" element={<MenuReview />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/staff/:id" element={<StaffReview />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
