import { createStore } from "vuex";

import { RootState } from "./types";

import books from "./modules/books/index";

export default createStore<RootState>({
  modules: {
    books,
  },
  strict: process.env.NODE_ENV !== "production",
});
