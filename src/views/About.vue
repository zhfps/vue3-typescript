<template>
  <div class="about">
    <el-button type="primary" @click="handleSetTest">主要按钮</el-button>
    <div>{{test}}</div>
   </div>
</template>
<script lang="ts">
import { login } from '@/api/user'
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default defineComponent({
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      test: 'Test/test'
    })
  },
  created() {
    this.getTest()
  },
  methods: {
    ...mapActions({
      setTest: 'Test/setTest'
    }),
    getTest() {
      login().then((res) => {
        console.log(res)
      })
    },
    handleSetTest() {
      this.setTest('xx')
    }
  }
});
</script>
