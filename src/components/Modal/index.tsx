import React, { useCallback, memo, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

function Modal({ children, onCloseModal }: Props) {
  // 스크롤 참조
  const scrollRef = useRef<HTMLDivElement>(null);

  // 이벤트 전파 막는 함수
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  // 스크롤 맨위로 이동시키는 함수
  const onScrollTop = useCallback(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    // Modal
    <div
      className="modal opacity-100 fixed w-full top-0 left-0 flex items-center justify-center animate-fadeInUp"
      onClick={onCloseModal}
    >
      <div className="modal-overlay absolute w-screen h-screen bg-gray-900 opacity-50"></div>

      <div
        className="modal-container bg-white dark:bg-darkBlue dark:text-gray-100 w-11/12 h-screen lg:max-w-xl md:max-w-lg mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
        onClick={stopPropagation}
        ref={scrollRef}
      >
        <div className="modal-content py-4 text-left px-5">
          {/* <!--Title--> */}
          <section className="flex justify-between items-center pb-3 h-10 sticky top-0 z-50 bg-white dark:bg-darkBlue">
            <p className="text-2xl font-bold pt-2">원하는 도서를 클릭-!</p>
            <button type="button" className="modal-close cursor-pointer z-50" onClick={onCloseModal}>
              <svg
                className="fill-current text-black dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 15 15"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </section>
          {/* <!--Body--> */}
          {children}
          {/* <!--footer - fixed btn--> */}
          <section className="flex fixed bottom-12 mr-1 h-10 right-9 md:right-1/4 lg:mr-12 xl:right-1/3 xl:mr-24 bg-indigo-300 rounded-xl">
            <button
              type="button"
              onClick={onScrollTop}
              className="px-2 bg-transparent p-3 rounded-xl hover:bg-gray-100 leading-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 pb-0.5"
                fill="none"
                viewBox="0 3 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default memo(Modal);
