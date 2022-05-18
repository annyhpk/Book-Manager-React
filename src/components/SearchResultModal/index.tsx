import React, { Dispatch, SetStateAction, useCallback, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../modules/actions/book.action';
import { BookInfo } from '../../typings/resType';
import getBooksInfo from '../../utils/getBooksInfo';

const BookList = React.lazy(() => import('../ModalSearchBookList'));
const Modal = React.lazy(() => import('../Modal'));
interface Props {
  onCloseModal: () => void;
  searchResultInfo?: BookInfo[];
  setSearchResultInfo: Dispatch<SetStateAction<BookInfo[]>>;
  searchValue: string;
}

const SearchResultModal: FC<Props> = ({ onCloseModal, searchResultInfo, setSearchResultInfo, searchValue }: Props) => {
  const dispatch = useDispatch();
  const [selectedBookList, setSelectedBookList] = useState<string[]>([]);
  const [page, setPage] = useState<number>(2);
  const [isEndFlag, setIsEndFlag] = useState<boolean>(false);

  const onClickNewPageLoad = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      getBooksInfo(page, searchValue)
        .then((response) => {
          if (setSearchResultInfo !== undefined) {
            setSearchResultInfo((prev) => [...prev, ...response.data.documents]);
            if (response.data.meta.is_end) {
              setIsEndFlag(true);
            }
          }
          setPage((prev) => prev + 1);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    [page, searchValue, setSearchResultInfo],
  );

  const onSubmitBook = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //선택한 책정보 리덕스에 저장
      if (Array.isArray(searchResultInfo) && searchResultInfo.length) {
        const selectedBooks = searchResultInfo?.filter((bookInfo: BookInfo) =>
          selectedBookList.includes(bookInfo.isbn),
        );
        dispatch(addBook(selectedBooks));
      }
      // 저장 성공시 모달 닫기
      onCloseModal();
      setSelectedBookList([]);
    },
    [dispatch, onCloseModal, searchResultInfo, selectedBookList],
  );

  return (
    <Modal onCloseModal={onCloseModal}>
      {Array.isArray(searchResultInfo) && !searchResultInfo?.length ? (
        <div>찾으시는 책정보를 찾지 못하였습니다.</div>
      ) : (
        <form onSubmit={onSubmitBook}>
          <table className="table-auto text-center border-gray-600 border-t-2 cursor-pointer">
            <thead className="sticky top-9 bg-slate-200 z-50">
              <tr>
                <th>도서</th>
                <th>(상태)도서명</th>
                <th>저자</th>
                <th>출판일</th>
              </tr>
            </thead>
            <tbody>
              <BookList
                searchResultInfo={searchResultInfo}
                setSelectedBookList={setSelectedBookList}
                selectedBookList={selectedBookList}
              />
            </tbody>
          </table>
          {isEndFlag ? (
            <div className="h-11 w-full rounded-b-xl bg-gray-300 text-center leading-loose">마지막 검색결과입니다.</div>
          ) : (
            <button className="h-11 w-full rounded-b-xl bg-gray-300" type="button" onClick={onClickNewPageLoad}>
              결과 더보기
            </button>
          )}
          <div className="flex fixed bottom-0.5 mr-1.5 right-9 md:right-1/4 lg:mr-12 xl:right-1/3 xl:mr-14 h-10 bg-green-200 rounded-xl">
            <button
              type="submit"
              className="px-2 bg-transparent p-3 rounded-xl text-gray-700 hover:bg-green-100 hover:text-gray-900 leading-4"
            >
              도서등록
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default SearchResultModal;
