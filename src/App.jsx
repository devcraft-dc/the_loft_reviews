import { Header } from './components/Header';
import { Search } from './components/Search';
import { CategoryFilter } from './components/CategoryFilter';
import { Content } from './components/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Search />
      <CategoryFilter />
    </>
  );
}

export default App;
