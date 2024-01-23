import { Outlet } from 'react-router-dom';
import SearchBar from '@/components/Search/SearchBar';
import SEO from '@/components/SEO/indext';

const SearchPage = () => (
  <>
    <SEO title="검색" description="keyWrod 서비스 친구 검색" />

    <SearchBar keyword="" />
    <Outlet />
  </>
);

export default SearchPage;
