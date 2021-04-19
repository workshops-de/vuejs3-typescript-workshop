import { BooksState } from "./modules/books/types";

export interface RootState {
  books: BooksState;
}

export interface MapperWithNamespace {
  <S>(map: (keyof S)[]): { [K in keyof S]: () => S[K] };
  <S>(namespace: string, map: (keyof S)[]): { [K in keyof S]: () => S[K] };
}
