import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import loadable from '@loadable/component';

const NotFound = loadable(() => import('../../page/NotFound'));
const MainPage = loadable(() => import('../../page/MainPage'));
const BookInfoPage = loadable(() => import('../../page/BookInfoPage'));

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
