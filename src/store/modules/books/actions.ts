import { ActionContext, ActionTree } from "vuex";

import { getBooks } from "@/utils/api/index";

import { RootState } from "@/store/types";

import { BooksState, GET_BOOKS, SET_BOOKS } from "./types";
import { Book } from "@/views/BookList/types";

type BooksContext = ActionContext<BooksState, RootState>;
type BooksAction = ActionTree<BooksState, RootState>;

const actions: BooksAction = {
  [SET_BOOKS]({ commit }: BooksContext, payload: { books: Book[] }) {
    commit("UPDATE_BOOKS", payload);
  },
  async [GET_BOOKS]({ commit }: BooksContext) {
    const books = await getBooks();
    commit("UPDATE_BOOKS", {
      books,
    });
  },
};

export default actions;
