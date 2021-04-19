import { createStore } from "vuex";

import { RootState } from "./types";
import { Book } from "@/views/BookList/types";

import { getBooks } from "@/utils/api/index";

export const SET_BOOKS = "SET_BOOKS";
export const GET_BOOKS = "GET_BOOKS";

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
    async [GET_BOOKS]({ commit }) {
      const books = await getBooks();
      commit("UPDATE_BOOKS", {
        books,
      });
    },
  },
  strict: process.env.NODE_ENV !== "production",
});
