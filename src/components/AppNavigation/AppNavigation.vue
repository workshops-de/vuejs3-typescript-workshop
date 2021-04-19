<template>
  <ul>
    <li><router-link active-class="active" to="/books">Books</router-link></li>
    <li><router-link active-class="active" to="/about">About</router-link></li>
    <li>
      <router-link active-class="active" to="/books/create"
        >New Book</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;

  li {
    float: left;
  }

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover:not(.router-link-exact-active) {
      background-color: #111111;
    }

    &.router-link-exact-active {
      background-color: #4caf50;
    }
  }
}
</style>
