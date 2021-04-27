import dayjs from 'dayjs';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { BookInfo } from '../../typings/resType';

type Props = {
  pageOfbooksInfo: BookInfo[];
  pageNum: number;
};

const MainBookList: FC<Props> = ({ pageOfbooksInfo, pageNum }: Props) => {
  return (
    <>
      {pageOfbooksInfo !== undefined &&
        pageOfbooksInfo?.map((book: BookInfo, index: number) => (
          <tr key={book.isbn}>
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
};

export default memo(MainBookList);
