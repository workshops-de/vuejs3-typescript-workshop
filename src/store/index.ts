import { createStore } from "vuex";

import { RootState } from "./types";

export default createStore<RootState>({
  state: {
    books: [],
  },
  strict: process.env.NODE_ENV !== "production",
});
