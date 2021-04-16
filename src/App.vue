<template>
  <AppNavigation />
  <MouseCursor />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/AppNavigation/AppNavigation.vue";
import MouseCursor from "@/components/MouseCursor/MouseCursor.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    MouseCursor,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
