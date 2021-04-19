import { MutationTree } from "vuex";

import { BooksState } from "./types";
import { Book } from "@/views/BookList/types";

const mutations: MutationTree<BooksState> = {
  UPDATE_BOOKS(state: BooksState, payload: { books: Book[] }) {
    state.books = payload.books;
  },
};

export default mutations;
