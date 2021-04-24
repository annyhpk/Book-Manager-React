import React, { FC, useCallback, useMemo, memo } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  currentPage: number;
  totalPage: number;
}

const Pagination: FC<Props> = ({ currentPage, totalPage }: Props) => {
  const history = useHistory();

  // 페이지 버튼을 누르면 해당페이지로 이동
  const onClickRedirect = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/books/${e.target.value}`);
    },
    [history],
  );

  // 처음으로 가기 버튼
  const onClickFirst = useCallback(() => {
    history.push('/books/1');
  }, [history]);

  // 마지막으로 가기 버튼
  const onClickLast = useCallback(() => {
    history.push(`/books/${totalPage}`);
  }, [history, totalPage]);

  // 다음페이지 버튼
  const onClickNext = useCallback(() => {
    const nextPage = totalPage > currentPage ? currentPage + 1 : currentPage;
    history.push(`/books/${nextPage}`);
  }, [history, currentPage, totalPage]);

  // 이전페이지 버튼
  const onClickPrev = useCallback(() => {
    const prevPage = currentPage > 0 ? currentPage - 1 : currentPage;
    history.push(`/books/${prevPage}`);
  }, [history, currentPage]);

  // 5개의 페이지 그룹을 계산
  const calculatePages: number[] = useMemo(() => {
    const pageCount = 5 as const;
    const pageGroup = Math.ceil(currentPage / pageCount);

    const max = pageGroup * pageCount;
    const lastPage = max > totalPage ? totalPage : max;

    const calculated = [];

    for (let i = pageGroup; i <= lastPage; ++i) {
      calculated.push(i);
    }

    return calculated;
  }, [currentPage, totalPage]);

  if (!currentPage) {
    return null;
  }

  return (
    <div className="flex flex-row justify-evenly w-full h-16 py-6 relative left-0 bottom-0 md:-bottom-8 md:px-20 lg:px-56">
      {/* 처음으로 가는 버튼 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 bg-gray-400 rounded-md shadow-md"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={onClickFirst}
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {/* 이전 버튼 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 bg-gray-400 rounded-md shadow-md"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={onClickPrev}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {/* Page Group 표시 */}
      {calculatePages?.map((page) => {
        return (
          <button
            key={page}
            className={`h-6 w-6 rounded-md shadow-md ${currentPage === page ? 'bg-gray-500 font-bold' : 'bg-gray-400'}`}
            onClick={onClickRedirect}
            value={page}
          >
            {page}
          </button>
        );
      })}
      {/* 다음 버튼 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 bg-gray-400 rounded-md shadow-md"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={onClickNext}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      {/* 마지막으로 가는 버튼 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 bg-gray-400 rounded-md shadow-sm"
        transform="rotate(180)"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={onClickLast}
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default memo(Pagination);
