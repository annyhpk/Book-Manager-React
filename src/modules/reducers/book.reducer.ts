import { createReducer } from '@reduxjs/toolkit';
import { BookInfo } from '../../typings/resType';

import { ADD_BOOK, DEL_BOOK, UPT_BOOK } from '../actions/types';

// dummy Data Load
import data from './dummyData';

type BooksInfoState = {
  documents: BookInfo[];
};

const inintialState: BooksInfoState = {
  documents: data,
};

export default createReducer(inintialState, {
  [ADD_BOOK]: (state, action) => {
    return {
      ...state,
      documents: [...action.payload, ...state.documents],
    };
  },
  [DEL_BOOK]: (state, action) => {
    return {
      ...state,
      documents: state.documents.filter((book) => book.isbn !== action.payload),
    };
  },
  [UPT_BOOK]: (state, action) => {
    const [id, amount] = action.payload;

    return void (state.documents[id].amount = amount);
  },
});
