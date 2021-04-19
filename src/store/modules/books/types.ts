import { Book } from "@/views/BookList/types";

export interface BooksState {
  books: Book[];
}

export const namespace = "books/";
export const SET_BOOKS = "SET_BOOKS";
export const GET_BOOKS = "GET_BOOKS";
