<template>
  <div class="about">
    <el-button type="primary" @click="change">主要按钮</el-button>
    <div>{{router}}</div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'about',
  setup() {
    const store = useStore()
    return {
      // access a state in computed function
      change: () => store.dispatch('Test/setTest', 'hello world')
    }
  }
});
</script>
