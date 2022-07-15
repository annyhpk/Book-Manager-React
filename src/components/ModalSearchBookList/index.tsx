import dayjs from 'dayjs';
import { memo, useCallback } from 'react';
import { BookInfo } from '../../typings/resType';

interface Props {
  searchResultInfo: BookInfo[] | undefined;
  setSelectedBookList: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBookList: string[];
}

function BookList({ searchResultInfo, setSelectedBookList, selectedBookList }: Props) {
  // 검색된 책 정보 리스트 클릭시 [선택-선택취소] 구현 부분
  const onClickBook = useCallback(
    (e: React.MouseEvent<HTMLTableRowElement>): void => {
      const isbn: string = e.currentTarget.dataset.isbn || '';
      if (!selectedBookList.includes(isbn)) {
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
              data-isbn={book.isbn}
              onClick={onClickBook}
              className={selectedBookList.includes(book.isbn) ? 'bg-green-400 bg-opacity-30 bg-clip-border' : ''}
            >
              <td>
                <img
                  className="transform hover:scale-150 z-2 hover:translate-x-9 hover:relative hover:z-10 transition-all shadow-lg"
                  width="200"
                  loading="lazy"
                  decoding="async"
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
}

export default memo(BookList);
