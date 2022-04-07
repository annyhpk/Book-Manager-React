import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router';

const NotFound = React.lazy(() => import('../../page/NotFound'));
const MainPage = React.lazy(() => import('../../page/MainPage'));
const BookInfoPage = React.lazy(() => import('../../page/BookInfoPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/books/1" />} />
      <Route path="/books/:page" element={<MainPage />} />
      <Route path="/book/:post/:isbn" element={<BookInfoPage />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};

export default App;
