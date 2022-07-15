import dayjs from 'dayjs';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BookInfo } from '../../typings/resType';

type Props = {
  pageOfBooksInfo: BookInfo[];
  pageNum: number;
};

function MainBookList({ pageOfBooksInfo, pageNum }: Props) {
  return (
    <>
      {pageOfBooksInfo !== undefined &&
        pageOfBooksInfo?.map((book: BookInfo, index: number) => (
          <tr key={book.isbn} className="dark:text-gray-100">
            <td>
              <b>{`[${book.status}]`}</b> <Link to={`/book/${index * pageNum}/${book.isbn}`}>{book.title}</Link>
            </td>
            <td>{book.authors[0]}</td>
            <td>{book.amount}</td>
            <td>{dayjs(book.datetime).format('YYYY-MM-DD')}</td>
          </tr>
        ))}
    </>
  );
}

export default memo(MainBookList);
