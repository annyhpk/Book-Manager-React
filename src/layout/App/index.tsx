import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Spinner from '../../components/Spinner';

const NotFound = lazy(() => import('../../page/NotFound'));
const MainPage = lazy(() => import('../../page/MainPage'));
const BookInfoPage = lazy(() => import('../../page/BookInfoPage'));
const DarkModeToggle = lazy(() => import('../../components/DarkModeToggle'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/books/1" />} />
        <Route path="/books/:page" element={<MainPage />} />
        <Route path="/book/:post/:isbn" element={<BookInfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
