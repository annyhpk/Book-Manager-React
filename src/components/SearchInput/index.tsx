import React, { memo } from 'react';
import useInput from '../../hooks/useInput';

const SearchInput = () => {
  const [searchValue, onChangeSearchValue] = useInput<string>('');

  return (
    <input
      id="searchValue"
      className="rounded-lg text-center border text-black"
      type="search"
      name="searchValue"
      placeholder="도서명으로 검색"
      value={searchValue}
      onChange={onChangeSearchValue}
    />
  );
};

export default memo(SearchInput);
