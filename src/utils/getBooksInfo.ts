import axios from 'axios';
import { ResType } from '../typings/resType';

const getBooksInfo = async (page: number, value: string): Promise<ResType> => {
  const baseURL = encodeURI(
    `https://dapi.kakao.com/v3/search/book?target=title&sort=accuracy&page=${page}&size=10&query=${value}`,
  );
  return await axios.get(baseURL, {
    headers: { Authorization: `KakaoAK ${process.env.NODE_ENV}` },
  });
};

export default getBooksInfo;
