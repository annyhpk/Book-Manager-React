import React, { useCallback, useState, FC, useMemo, useRef } from 'react';
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

  // 페이지 요청 함수
  const NewPageLoad = useCallback(
    (pageNum: number, searchQuery = searchValue) => {
      return getBooksInfo(pageNum, searchQuery)
        .then((response) => {
          setSearchResultInfo((prev) => [...prev, ...response.data.documents]);
          // 마지막 페이지 여부 전달
          return response.data.meta.is_end;
        })
        .catch((reason) => {
          if (reason.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            console.log(reason.response.data);
            console.log(reason.response.status);
            console.log(reason.response.headers);
          } else if (reason.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
            console.log(reason.request);
          } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            console.log('Error', reason.message);
          }
          alert(`죄송합니다. 통신에 문제가 발생하였습니다.`);

          return true;
        });
    },
    [searchValue, setSearchResultInfo],
  );

  // 책검색
  const onSearchBook = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const searchQuery = formData.get('searchValue') as string;
      if (searchQuery.trim() === '' && !searchQuery.trim().length) {
        return null;
      }
      setSearchResultInfo([]);
      setSearchValue(searchQuery);
      // 책정보 정보 로드
      NewPageLoad(pageNum, searchQuery).then(() => {
        modalRef.current?.setAttribute('open', 'true');
      });
    },
    [NewPageLoad, pageNum, setSearchValue],
  );

  if (isNaN(pageNum) || !pageNum || pageNum > totalPage) {
    navigate('/notFound');
  }

  return (
    <div className="container pt-8 mx-auto md:pt-16">
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
            className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-0.7 px-3 border border-gray-400 rounded shadow"
            type="submit"
          >
            검색
          </button>
        </form>
      </header>
      <main className="flex flex-col mt-8 mx-3 sm:mt-4 md:mx-8 lg:mx-24 justify-center">
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
        <SearchResultModal onCloseModal={onCloseModal} searchResultInfo={searchResultInfo} NewPageLoad={NewPageLoad} />
      </dialog>
    </div>
  );
};

export default MainPage;
