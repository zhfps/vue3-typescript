<template>
  <div class="home">
    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-link">Link</button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
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
      axios.get('http://127.0.0.1:8080/test').then((res) => {
        console.log(res)
      })
    }
  }
});
</script>
