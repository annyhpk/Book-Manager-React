import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const NotFound = loadable(() => import('../../page/NotFound'));
const MainPage = loadable(() => import('../../page/MainPage'));
const BookInfoPage = loadable(() => import('../../page/BookInfoPage'));

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/books/1" />
      <Route path="/books/:page" component={MainPage} />
      <Route path="/book/:post/:isbn" component={BookInfoPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
