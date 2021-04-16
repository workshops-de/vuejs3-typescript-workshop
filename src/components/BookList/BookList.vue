<template>
  <table>
    <tr v-for="book in filteredBooks" :key="book.isbn">
      <td>{{ book.title }}</td>
      <td>{{ book.isbn }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Book {
  title: string;
  isbn: string;
}

interface ComponentData {
  books: Book[];
}

export default defineComponent({
  name: "BookList",
  data(): ComponentData {
    return {
      books: [
        {
          title: "Design Patterns",
          isbn: "978-0-20163-361-0",
        },
        {
          title: "REST und HTTP",
          isbn: "978-3-86490-120-1",
        },
        {
          title: "Eloquent JavaScript",
          isbn: "978-1-59327-584-6",
        },
      ],
    };
  },
  computed: {
    filteredBooks(): Book[] {
      return this.books.filter((book) =>
        book.title.toLocaleLowerCase().includes("tt")
      );
    },
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
