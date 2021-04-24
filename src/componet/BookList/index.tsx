import dayjs from 'dayjs';
import React, { FC, memo, useCallback } from 'react';
import { BookInfo } from '../../typings/resType';

interface Props {
  searchResultInfo: BookInfo[] | undefined;
  setSelectedBookList: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBookList: string[];
}

const BookList: FC<Props> = ({ searchResultInfo, setSelectedBookList, selectedBookList }: Props) => {
  // 검색된 책 정보 리스트 클릭시 [선택-선택취소] 구현 부분
  const onClickBook = useCallback(
    (e) => {
      const isbn = e.currentTarget.firstChild.textContent;
      if (e.currentTarget && e.currentTarget.firstChild.nodeName === 'TD' && !selectedBookList.includes(isbn)) {
        setSelectedBookList((prev: string[]) => [...prev, isbn]);
      } else {
        setSelectedBookList((prev: string[]) => prev.filter((selectedIsbn) => selectedIsbn !== isbn));
      }
    },
    [selectedBookList, setSelectedBookList],
  );

  return (
    <>
      {searchResultInfo !== undefined &&
        searchResultInfo?.map((book) => {
          return (
            <tr
              key={book.isbn}
              onClick={onClickBook}
              className={selectedBookList.includes(book.isbn) ? 'bg-green-400 bg-opacity-30 bg-clip-border' : ''}
            >
              {/* 식별을 위한 숨겨진 엘리먼트 */}
              <td className="hidden">{book.isbn}</td>
              <td>
                <img
                  className="transform hover:scale-180 sm:hover:scale-400 hover:translate-x-5 z-2 hover:absolute z-10 transition-all shadow-lg"
                  src={book.thumbnail}
                  alt={book.title}
                />
              </td>
              <td className="max-w-sm font-bold pl-4 text-left">
                {`(${book.status}) ${book.title}`} <br />
                <div className="text-gray-400 h-auto text-left font-normal">{`${book.contents?.slice(0, 50)}...`}</div>
              </td>
              <td>{book.authors[0]}</td>
              <td>{dayjs(book.datetime).format('YYYY-MM-DD')}</td>
            </tr>
          );
        })}
    </>
  );
};

export default memo(BookList);
