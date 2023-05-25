import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { StaffPage } from './pages/StaffPage';
import { useState } from 'react';
import { Context } from './context';

function App() {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <Context.Provider
      value={{ searchText, setSearchText, activeCategory, setActiveCategory }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
