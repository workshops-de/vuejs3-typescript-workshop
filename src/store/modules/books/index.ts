import { Module } from "vuex";

import { RootState } from "@/store/types";

import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import { BooksState } from "./types";

const booksState: Module<BooksState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default booksState;
