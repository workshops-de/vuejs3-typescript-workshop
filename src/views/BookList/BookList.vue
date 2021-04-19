<template>
  <label for="search">🔎 </label>
  <input id="search" v-model="search" placeholder="Search for books by title" />

  <table>
    <BookListItem
      v-for="book in filteredBooks"
      :key="book.isbn"
      v-bind="book"
      @read="readBook(book)"
    />
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespacedHelpers } from "vuex";

import BookListItem from "@/components/BookListItem/BookListItem.vue";
import { Book } from "./types";
import { MapperWithNamespace } from "@/store/types";
import {
  BooksState,
  GET_BOOKS,
  namespace,
  SET_BOOKS,
} from "@/store/modules/books/types";

const { mapState, mapActions } = createNamespacedHelpers(namespace);

interface ComponentData {
  search: string;
}

export default defineComponent({
  name: "BookList",
  components: {
    BookListItem,
  },
  data(): ComponentData {
    return {
      search: "",
    };
  },
  computed: {
    ...(mapState as MapperWithNamespace)<BooksState>(["books"]),
    filteredBooks(): Book[] {
      return this.books.filter((book) => book.title.includes(this.search));
    },
  },
  methods: {
    ...mapActions({
      setBooks: SET_BOOKS,
      getBooks: GET_BOOKS,
    }),
    readBook(book: Book) {
      this.setBooks({
        books: [
          ...this.books.map((bookEntry) => {
            if (bookEntry.isbn === book.isbn) {
              return {
                ...bookEntry,
                read: true,
              };
            }
            return bookEntry;
          }),
        ],
      });
    },
    async updateBooks() {
      await this.getBooks();
    },
  },
  created() {
    this.updateBooks();
  },
});
</script>

<style lang="scss">
$grey-color: #dddddd;

table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid $grey-color;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: $grey-color;
  }
}
</style>
