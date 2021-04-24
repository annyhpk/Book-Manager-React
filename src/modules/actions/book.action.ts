import { createAction } from '@reduxjs/toolkit';
import { BookInfo } from '../../typings/resType';
import { ADD_BOOK, DEL_BOOK, UPT_BOOK } from './types';

export const addBook = createAction(ADD_BOOK, function prepare(dataToSubmit: BookInfo[]) {
  let bookDataList: BookInfo[] = [];

  if (Array.isArray(dataToSubmit) && dataToSubmit.length) {
    bookDataList = dataToSubmit.map((bookData) => {
      return { ...bookData, amount: 0 };
    });
  }

  return {
    payload: bookDataList,
  };
});

export const delBook = createAction(DEL_BOOK, function prepare(dataToSubmit: string) {
  return {
    payload: dataToSubmit,
  };
});

export const uptBook = createAction(UPT_BOOK, function prepare(dataToSubmit: [number, number]) {
  return {
    payload: dataToSubmit,
  };
});
