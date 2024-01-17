import { Outlet } from 'react-router-dom';
import SearchBar from '@/components/Search/SearchBar';

const SearchPage = () => (
  <>
    <SearchBar keyword="" />
    <Outlet />
  </>
);

export default SearchPage;
