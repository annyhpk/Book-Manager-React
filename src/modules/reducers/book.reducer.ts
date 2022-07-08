import { createReducer } from '@reduxjs/toolkit';
import { BookInfo, BookState } from '../../typings/resType';
import toIndexingData from '../../utils/toIndexingData';

import { addBook, delBook, uptBook } from '../actions/book.action';

// dummy Data Load
import data from './dummyData';

interface State {
  documents: BookState;
}

const initialState: State = {
  documents: data,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      const data: BookInfo[] = action.payload;
      const indexedData = toIndexingData(data);

      state.documents = { ...indexedData, ...state.documents };
    })
    .addCase(delBook, (state, action) => {
      const isbn: number = action.payload;

      delete state.documents[isbn];
    })
    .addCase(uptBook, (state, action) => {
      const [isbn, amount]: [number, number] = action.payload as [number, number];

      state.documents[isbn].amount = amount;
    })
    .addDefaultCase((state) => state);
});
