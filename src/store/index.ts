import { createStore } from "vuex";

import { RootState } from "./types";
import { Book } from "@/views/BookList/types";

export const SET_BOOKS = "SET_BOOKS";

export default createStore<RootState>({
  state: {
    books: [],
  },
  mutations: {
    UPDATE_BOOKS(state, payload: { books: Book[] }) {
      state.books = payload.books;
    },
  },
  actions: {
    [SET_BOOKS]({ commit }, payload: { books: Book[] }) {
      commit("UPDATE_BOOKS", payload);
    },
  },
  strict: process.env.NODE_ENV !== "production",
});
