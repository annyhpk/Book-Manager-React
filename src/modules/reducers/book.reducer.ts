import { createReducer } from '@reduxjs/toolkit';
import { BookInfo } from '../../typings/resType';

import { addBook, delBook, uptBook } from '../actions/book.action';

// dummy Data Load
import data from './dummyData';

type BooksInfoState = {
  documents: BookInfo[];
};

const initialState: BooksInfoState = {
  documents: data,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      return {
        ...state,
        documents: [...action.payload, ...state.documents],
      };
    })
    .addCase(delBook, (state, action) => {
      return {
        ...state,
        documents: state.documents.filter((book) => book.isbn !== action.payload),
      };
    })
    .addCase(uptBook, (state, action) => {
      const [id, amount] = action.payload;

      return void (state.documents[id].amount = amount);
    })
    .addDefaultCase((state) => state);
});
