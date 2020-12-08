<template>
  <div class="about">
    <el-button type="primary" @click="change">主要按钮</el-button>
    <div>{{test}}</div>
   </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()

    return {
      // access a state in computed function
      test: computed(() => store.state.Test.test),
      change: () => store.dispatch('Test/setTest', 'hello world')
    }
  }
});
</script>
