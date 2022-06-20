import React, { useCallback, useState, FC, useMemo, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookInfo } from '../../typings/resType';
import { RootState } from '../../modules/reducers';

import { useAppSelector } from '../../hooks/useAppSelector';
import getBooksInfo from '../../utils/getBooksInfo';

const SearchResultModal = React.lazy(() => import('../../components/SearchResultModal'));
const Pagination = React.lazy(() => import('../../components/Pagination'));
const MainBookList = React.lazy(() => import('../../components/MainBookList'));
const SearchInput = React.lazy(() => import('../../components/SearchInput'));

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();
  const pageNum = useMemo(() => parseInt(page || '1'), [page]);

  // 현재 페이지 상태 정보
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResultInfo, setSearchResultInfo] = useState<BookInfo[]>([]);
  const modalRef = useRef<HTMLDialogElement>(null);

  // 다크 모드
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // 현재 페이지에 로드할 데이터 범위 계산
  const [firstArticle, endArticle] = useMemo(() => [(pageNum - 1) * 15, 15 * pageNum], [pageNum]);
  const booksInfo = useAppSelector((state: RootState) => {
    const booksInfoPerPage = Object.values(state.book.documents).slice(firstArticle, endArticle);
    const totalBook = Object.keys(state.book.documents).length;

    return {
      booksInfo: booksInfoPerPage,
      length: totalBook,
    };
  });
  const pageOfBooksInfo = useMemo(() => booksInfo.booksInfo, [booksInfo]);

  // 페이지당 데이터
  const dataPerPage = useMemo(() => 15 as const, []);
  // 전체 페이지 계산
  const totalPage = useMemo(() => Math.ceil(booksInfo.length / dataPerPage), [booksInfo.length, dataPerPage]);

  // 모달창 닫기
  const onCloseModal = useCallback(() => {
    modalRef.current?.removeAttribute('open');
  }, []);

  const onClickDarkMode = useCallback(() => {
    document.body.classList.toggle('dark');
    setDarkMode((prev) => !prev);
  }, []);

  // 책정보 요청 함수
  const bookDataLoad = useCallback(
    (pageNum: number, searchQuery = searchValue) => {
      return getBooksInfo(pageNum, searchQuery)
        .then((response) => {
          setSearchResultInfo((prev) => [...prev, ...response.data.documents]);
          // 마지막 페이지 여부 전달
          return response.data.meta.is_end;
        })
        .catch((err) => {
          throw new Error('BookDataLoad job result failed', { cause: err });
        });
    },
    [searchValue, setSearchResultInfo],
  );

  // 책검색
  const onSearchBook = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const searchQuery = formData.get('searchValue') as string;
      if (searchQuery.trim() === '' && !searchQuery.trim().length) {
        return null;
      }
      setSearchResultInfo([]);
      setSearchValue(searchQuery);
      try {
        // 책정보 정보 로드
        await bookDataLoad(pageNum, searchQuery);
        // 모달창 오픈
        modalRef.current?.setAttribute('open', 'true');
      } catch (error) {
        if (error instanceof Error) console.log(`Caused by ${error?.cause}`);
      }
    },
    [bookDataLoad, pageNum, setSearchValue],
  );

  if (isNaN(pageNum) || !pageNum || pageNum > totalPage) {
    navigate('/notFound');
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      document.querySelector('#default-toggle')?.setAttribute('checked', 'checked');
      setDarkMode((prev) => !prev);
    }
  }, []);

  return (
    <div className="h-screen pt-8 mx-0 md:pt-16 bg-ivory dark:bg-darkBlue dark:text-gray-100">
      <div className="flex flex-row-reverse">
        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onClick={onClickDarkMode} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span id="dark-mode-text" className="ml-3 text-sm pr-2 font-medium text-gray-900 dark:text-gray-300">
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </span>
      </div>

      <header className="flex w-full h-10 justify-around flex-wrap flex-row">
        {/* 로고 */}
        <div className="inline-flex flex-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <b className="sm:text-base md:text-3xl">도서 관리 시스템</b>
        </div>
        {/* 책정보 검색창 */}
        <form className="pt-1 h-10" onSubmit={onSearchBook}>
          <SearchInput />
          <button
            className="g-white dark:text-gray-100 hover:bg-gray-100 font-semibold py-0.7 px-3 border border-gray-400 rounded shadow"
            type="submit"
          >
            검색
          </button>
        </form>
      </header>
      <main className="Container flex flex-col mt-8 mx-3 sm:mt-4 md:mx-8 lg:mx-24 justify-center">
        <table className="table-auto border-separate text-center">
          {/* 테이블 헤더 */}
          <thead>
            <tr className="whitespace-nowrap">
              <th>(상태) 도서명</th>
              <th>글쓴이</th>
              <th>보유</th>
              <th>출판일</th>
            </tr>
          </thead>
          {/* 책정보 로드 */}
          <tbody>
            <MainBookList pageOfBooksInfo={pageOfBooksInfo} pageNum={pageNum} />
          </tbody>
        </table>
      </main>
      {/* 페이지네이션 부분 */}
      <Pagination currentPage={pageNum} totalPage={totalPage} />

      {/* 책 검색 결과 모달창 */}
      <dialog id="dialog" ref={modalRef}>
        <SearchResultModal
          onCloseModal={onCloseModal}
          searchResultInfo={searchResultInfo}
          bookDataLoad={bookDataLoad}
        />
      </dialog>
    </div>
  );
};

export default MainPage;
