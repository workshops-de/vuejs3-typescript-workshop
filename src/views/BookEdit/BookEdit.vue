<template>
  <form>
    <input type="text" v-model.lazy.trim="book.title" name="title" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Book } from "@/views/BookList/types";
import http from "@/utils/http";

interface ComponentData {
  book: Partial<Book>;
  isbn: string | null;
}

export default defineComponent({
  name: "BookEdit",
  data(): ComponentData {
    return {
      book: {},
      isbn: null,
    };
  },
  methods: {
    async getBook() {
      this.book = await http<Book>(`http://localhost:4730/books/${this.isbn}`);
    },
    init(isbn: string) {
      this.isbn = isbn;
      this.getBook();
    },
  },
  created() {
    this.init(this.$route.params.isbn as string);
  },
  beforeRouteUpdate(to) {
    this.init(to.params.isbn as string);
  },
});
</script>
