import React, { useCallback, useState, FC, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import useInput from '../../hooks/useInput';
import { RootState } from '../../modules/reducers';
import { BookInfo } from '../../typings/resType';
import SearchResultModal from '../../componet/SearchResultModal';
import Pagination from '../../componet/Pagination';
import getBooksInfo from '../../utils/getBooksInfo';
import MainBookList from '../../componet/MainBookList';
// DEMO Version
// import getDummyBooks from '../../utils/getDummyBooks';

const MainPage: FC = () => {
  const history = useHistory();
  const { page } = useParams<{ page: string }>();
  const pageNum = useMemo(() => parseInt(page), [page]);

  // 현재 페이지 상태 정보
  const [searchValue, onChangeSearch] = useInput<string>('');
  const [showSearchResultModal, setShowSearchResultModal] = useState<boolean>(false);
  const [searchResultInfo, setSearchResultInfo] = useState<BookInfo[]>([]);

  // 현재 페이지에 로드할 데이터 범위 계산
  const [firstArticle, endArticle] = useMemo(() => [(pageNum - 1) * 15, 15 * pageNum], [pageNum]);
  const booksInfo = useAppSelector((state: RootState) => {
    return {
      booksInfo: state.book.documents.slice(firstArticle, endArticle),
      length: state.book.documents.length,
    };
  });
  const pageOfbooksInfo = useMemo(() => booksInfo.booksInfo, [booksInfo]);

  // 페이지당 데이터
  const dataPerPage = 15 as const;
  // 전체 페이지 계산
  const totalPage = useMemo(() => Math.ceil(booksInfo.length / dataPerPage), [booksInfo]);

  // 모달창 닫기
  const onCloseModal = useCallback(() => {
    setShowSearchResultModal(false);
  }, []);

  // 책검색
  const onSearchBook = useCallback(
    (e) => {
      e.preventDefault();
      if (searchValue.trim() === '' && !searchValue.trim().length) {
        return null;
      }
      getBooksInfo(pageNum, searchValue)
        .then((response) => {
          setShowSearchResultModal(true);
          setSearchResultInfo(response.data.documents);
        })
        .catch((error) => {
          console.dir(error);
        });

      // DEMO Version
      // getDummyBooks(pageNum)
      //   .then((response) => {
      //     setShowSearchResultModal(true);
      //     setSearchResultInfo(response.data.documents);
      //   })
      //   .catch((error) => {
      //     console.dir(error);
      //   });
    },
    [pageNum, searchValue],
  );

  if (isNaN(pageNum) || !pageNum || pageNum > totalPage) {
    history.push('/notFound');
  }

  return (
    <div className="container pt-8 mx-auto md:pt-16">
      <header className="flex w-full h-10 justify-around flex-wrap flex-row">
        {/* 로고 */}
        <div className="inline-flex flex-nowrap">
          <img
            className="mr-3"
            width="40"
            height="40"
            alt="Book Logo"
            src="https://cdn.pixabay.com/photo/2016/01/23/16/02/book-1157658_960_720.png"
          />
          <b className="sm:text-base md:text-3xl">도서 관리 시스템</b>
        </div>
        {/* 책정보 검색창 */}
        <form className="pt-1 h-10" onSubmit={onSearchBook}>
          <input
            className="rounded-lg text-center border"
            type="search"
            placeholder="도서명으로 검색"
            value={searchValue}
            onChange={onChangeSearch}
          />
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
            <MainBookList pageOfbooksInfo={pageOfbooksInfo} pageNum={pageNum} />
          </tbody>
        </table>
      </main>
      {/* 페이지네이션 부분 */}
      <Pagination currentPage={pageNum} totalPage={totalPage} />

      {/* 책 검색 결과 모달창 */}
      <SearchResultModal
        show={showSearchResultModal}
        onCloseModal={onCloseModal}
        setShowSearchResultModal={setShowSearchResultModal}
        searchResultInfo={searchResultInfo}
        setSearchResultInfo={setSearchResultInfo}
        searchValue={searchValue}
      />
    </div>
  );
};

export default MainPage;
