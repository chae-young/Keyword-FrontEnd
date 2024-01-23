import { useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';
import SearchBar from '@/components/Search/SearchBar';
import SearchResultList from '@/components/Search/SearchResultList';
import NoResultText from '@/components/common/NoDataText';
import UserItem from '@/components/common/Skeleton/UserItem';

const SearchResultPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get('keyword');

  return (
    <>
      <SearchBar keyword={keyword || ''} />
      {keyword ? (
        <SearchResultList keyword={keyword} />
      ) : (
        <NoResultText text="검색결과가 없습니디" />
      )}
    </>
  );
};
export default SearchResultPage;
