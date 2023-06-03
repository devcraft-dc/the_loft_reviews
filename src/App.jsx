import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { StaffPage } from './pages/StaffPage';
import { useState } from 'react';
import { Context } from './context';
import { ReviewPage } from './pages/ReviewPage';
import ScrollToTop from './components/scrollToTop';
import { OtherReviews } from './pages/OtherReviews';

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
          <Route path="/:id" element={<ReviewPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/staff/:id" element={<ReviewPage />} />
          <Route path='/other' element={<OtherReviews />}/>
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
