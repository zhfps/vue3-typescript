<template>
  <div class="header-container">
    <div class="icon">
         <i :class="icons"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, setup, reactive } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let icons = reactive(props.icon)
    icons += 'icon'
    return {
      icons
    }
  }
})
</script>
