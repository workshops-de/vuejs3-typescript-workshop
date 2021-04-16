<template>
  <h1>{{ book.title }}</h1>
  <ol>
    <li v-for="(value, key) in book" :key="key">{{ key }}: {{ value }}</li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { RouteLocationNormalized } from "vue-router";
import { Book } from "@/views/BookList/types";
import http from "@/utils/http";

interface ComponentData {
  book: Partial<Book>;
  isbn: string | null;
}

export default defineComponent({
  name: "BookDetail",
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
  beforeRouteUpdate(to: RouteLocationNormalized) {
    this.init(to.params.isbn as string);
  },
});
</script>

<style scoped>
ol {
  list-style: none;
  text-align: left;
}
</style>
