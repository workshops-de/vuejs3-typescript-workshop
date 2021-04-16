<template>
  <button>
    <span v-if="isVisible">Hide</span>
    <span v-else>Show</span>
  </button>
  <div class="container" v-show="isVisible">Lorem ipsum.</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  isVisible: boolean;
}

export default defineComponent({
  name: "InfoBox",
  data(): ComponentData {
    return {
      isVisible: true,
    };
  },
});
</script>

<style lang="scss">
.container {
  border: 1px solid;
  background-color: lightgrey;
}
</style>
