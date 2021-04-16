<template>
  <div v-bind:id="id">x: {{ x }}, y: {{ y }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  id: string;
  x: number;
  y: number;
}

export default defineComponent({
  data(): ComponentData {
    return {
      id: "my-id",
      x: 12,
      y: 4,
    };
  },
});
</script>
