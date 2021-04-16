<template>
  <table>
    <tr v-for="book in books" :key="book.isbn">
      <td>{{ book.title }}</td>
      <td>{{ book.isbn }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Book } from "./types";

import BOOKS from "./books";

interface ComponentData {
  books: Book[];
}

export default defineComponent({
  name: "BookList",
  data(): ComponentData {
    return {
      books: [],
    };
  },
  created() {
    this.books = [...BOOKS];
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
