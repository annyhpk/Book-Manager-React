import { BookInfo, BookState } from '../typings/resType';

const toIndexingData = (resData: BookInfo[]): BookState => {
  const indexedData: BookState = {};
  resData.map((data) => {
    const index = parseInt(data.isbn);
    indexedData[index] = data;
  });

  return indexedData;
};

export default toIndexingData;
