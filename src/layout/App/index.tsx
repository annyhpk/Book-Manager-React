import React, { FC, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Spinner from '../../components/Spinner';

const NotFound = React.lazy(() => import('../../page/NotFound'));
const MainPage = React.lazy(() => import('../../page/MainPage'));
const BookInfoPage = React.lazy(() => import('../../page/BookInfoPage'));

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/books/1" />} />
        <Route path="/books/:page" element={<MainPage />} />
        <Route path="/book/:post/:isbn" element={<BookInfoPage />} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
