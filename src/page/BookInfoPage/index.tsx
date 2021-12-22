import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { delBook, uptBook } from '../../modules/actions/book.action';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../modules/reducers';
import { BookInfo } from '../../typings/resType';
import useInput from '../../hooks/useInput';
import dayjs from 'dayjs';

// react-toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookInfoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, isbn } = useParams<{ post: string; isbn: string }>();
  const bookInfo: BookInfo[] = useAppSelector((state: RootState) => state.book.documents);
  const pageInfo: BookInfo = bookInfo.filter((info) => info.isbn === isbn)[0];

  const [bookAmount, onChangeBookAmount] = useInput(pageInfo.amount);

  // 복사 버튼
  const copyISBN = useCallback(() => {
    const text = pageInfo.isbn;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copying to clipboard was successful!');
        toast('ISBN 복사 완료!');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageInfo.isbn]);

  // bookData {
  //   authors: string[];
  //   contents: string;
  //   datetime: Date;
  //   isbn: string;
  //   price: number;
  //   publisher: string;
  //   sale_price: number;
  //   status: string;
  //   thumbnail: string;
  //   title: string;
  //   translators: string[];
  //   url: string;
  //   amount: number;
  // }

  const onClickHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onClickDelBook = useCallback(
    (e) => {
      if (isbn) {
        e.stopPropagation();
        dispatch(delBook(isbn));
        navigate('/');
      } else {
        wrongApproachAlert();
      }
    },
    [dispatch, navigate, isbn],
  );

  const onUpdateAmount = useCallback(
    (e) => {
      e.stopPropagation();
      if (post) {
        const postNum = parseInt(post);
        const data: [number, number] = [postNum, bookAmount];
        dispatch(uptBook(data));
        toast('변경되었습니다.!');
      } else {
        wrongApproachAlert();
      }
    },
    [bookAmount, dispatch, post],
  );

  const wrongApproachAlert = useCallback(() => {
    alert('잘못된 접근입니다.');
    navigate('/');
  }, []);

  return (
    <div className="container pt-8 mx-auto md:pt-12">
      <div className="inline-flex ml-3 mb-3 p-1 bg-yellow-200 rounded-xl shadow-md" onClick={onClickHome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        &nbsp;<b>메인페이지</b>
      </div>
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
          <h1 className="text-gray-700 text-center font-bold text-lg mb-3 bg-gray-200 rounded-xl">{pageInfo.title}</h1>
          <div className="inline-flex justify-center w-full">
            <img className="max-w-sm w-1/3 object-cover shadow-lg" alt={pageInfo.title} src={pageInfo.thumbnail} />
          </div>
        </div>
        <div className="bg-white space-y-6">
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto">책 상태</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <label className="text-sm text-gray-400">상태</label>
              <div className="w-full inline-flex border">
                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-gray-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder={pageInfo.status}
                  disabled
                />
              </div>
              <label className="text-sm text-gray-400">정가</label>
              <label className="text-sm text-gray-400 ml-36">판매가</label>
              <div className="w-full inline-flex border">
                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-gray-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2 border-gray-300 border-r-2"
                  placeholder={`${pageInfo.price}`}
                  disabled
                />
                <input
                  type="number"
                  className="w-1/1 focus:outline-none focus:text-gray-600 p-2"
                  placeholder={`${pageInfo.sale_price}`}
                  disabled
                />
              </div>
              <label className="text-sm text-gray-400">isbn</label>
              <div className="w-full inline-flex border">
                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-gray-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input type="text" className="w-11/12 text-gray-400 bg-gray-50 p-2" value={pageInfo.isbn} readOnly />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 text-gray-400 pr-2 bg-gray-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={copyISBN}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </div>
              <label className="text-sm text-gray-400">출판날짜</label>
              <div className="w-full inline-flex border">
                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 text-gray-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="datetime"
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder={dayjs(pageInfo.datetime).format('YYYY-MM-DD')}
                  disabled
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">책 정보</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label className="text-sm text-gray-400">소개</label>
                <div className="w-full inline-flex border leading-6">
                  <div className="w-1/12 pt-8 bg-gray-100 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 text-gray-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  {pageInfo.contents}
                </div>
                <a className="flex justify-items-end flex-nowrap text-blue-500" href={pageInfo.url}>
                  상세보기
                </a>
              </div>
              <div>
                <label className="text-sm text-gray-400">저자</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 text-gray-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-11/12 focus:outline-none p-2"
                    placeholder={pageInfo.authors.join(', ')}
                    disabled
                  />
                </div>
                <label className="text-sm text-gray-400">번역자</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 text-gray-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-11/12 focus:outline-none p-2"
                    placeholder={pageInfo.translators.join(', ')}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
            <h2 className="md:w-4/12 max-w-sm mx-auto">수량</h2>
            <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
              <div className="w-full inline-flex border-b">
                <div className="w-1/12 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                  value={bookAmount}
                  onChange={onChangeBookAmount}
                />
              </div>
            </div>
            {/* 수정 버튼 */}
            <div className="md:w-3/12 text-center md:pl-6">
              <button
                type="button"
                className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                onClick={onUpdateAmount}
              >
                <svg fill="none" className="w-4 text-white mr-2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                업데이트
              </button>
            </div>
          </div>

          <hr />
          {/* 삭제 버튼 */}
          <div className="w-full p-4 text-right text-red-500" onClick={onClickDelBook}>
            <button className="inline-flex p-1 items-center focus:outline-none mr-4 bg-red-100 hover:bg-red-200 rounded-xl shadow-md">
              <svg fill="none" className="w-4 mr-2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              삭제
            </button>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookInfoPage;
