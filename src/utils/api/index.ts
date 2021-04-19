import { get } from "../http";
import { Book } from "@/views/BookList/types";

export const getBooks = async (): Promise<Book[]> => {
  const books = await get<Book[]>("http://localhost:4730/books");

  return books;
};
