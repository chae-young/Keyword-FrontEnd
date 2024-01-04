import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '@/components/Search/SearchBar';
import SearchResultList from '@/components/Search/SearchResultList';
import NoResultText from '@/components/common/NoDataText';

const SearchResultPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get('keyword');

  return (
    <>
      <SearchBar backSearch keyword={keyword || ''} />
      {keyword ? (
        <SearchResultList keyword={keyword} />
      ) : (
        <NoResultText text="검색결과가 없습니디" />
      )}
    </>
  );
};
export default SearchResultPage;
