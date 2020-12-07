<template>
  <div class="home">
    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-link">Link</button>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {

  },
  created() {
    this.getTest()
  },
  methods: {
    getTest() {
      login().then((res) => {
        console.log(res)
      })
    }
  }
});
</script>
