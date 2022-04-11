export interface ResType {
  data: {
    meta: Meta;
    documents: BookInfo[];
  };
}
export interface BookInfo {
  authors: string[];
  contents: string;
  datetime: Date;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
  amount: number;
}

export interface BookState {
  [isbn: number]: BookInfo;
}

interface Meta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}
