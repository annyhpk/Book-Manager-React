import { BookInfo } from '../../typings/resType';
import toIndexingData from '../../utils/toIndexingData';

const cloneObj = (obj: BookInfo) => JSON.parse(JSON.stringify(obj));

const dummyBookData = {
  authors: ['외국작가'],
  contents:
    '이런들 어떨하리 저런들 어떠하리 더미하게 살다 더미하게 가는것이 인생이거늘 어찌 그리 고민하며 감정을 소비하면서 인생을 살아가는 건인가',
  datetime: new Date('2021-04-11T00:00:00.000+09:00'),
  isbn: '1234567891234',
  price: 12900,
  publisher: '테스트의 계단',
  sale_price: 11250,
  status: '정상판매',
  thumbnail: 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png',
  title: '이런들저런들',
  translators: ['국내작가'],
  url: 'https://google.com',
  amount: 2,
};

const makeData: BookInfo[] = [];

for (let i = 0; i < 80; ++i) {
  dummyBookData.isbn = `${parseInt(dummyBookData.isbn) + 1}`;
  if (i % 15 === 0) dummyBookData.title = `이런들저런들 ${i / 15 + 1}`;
  makeData.push(cloneObj(dummyBookData));
}

const data: BookInfo[] = makeData || [dummyBookData];

export default toIndexingData(data);
