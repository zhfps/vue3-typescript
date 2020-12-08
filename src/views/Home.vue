<template>
  <div class="home">
    <div class="buttons">
      <button class="button is-primary" @click="add">Primary</button>
      {{id}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const id = ref(0)
    const add = () => {
      id.value += 1
    }
    return {
      id,
      add
    }
  }
});
</script>
