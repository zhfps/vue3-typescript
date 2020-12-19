<template>
  <div class="header-container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" height="44px">
    </div>
    <div class="icon">
         <i :class="icon" @click="ChangeIcon(icon)"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
type IconType = PropType<'el-icon-s-fold icon' | 'el-icon-s-unfold icon'>
export default defineComponent({
  name: 'Header',
  props: {
    icon: {
      type: String as IconType,
      required: true
    }
  },
  setup(props, context) {
    const ChangeIcon = (evt: IconType) => {
      context.emit('change-icon', evt)
    }
    return {
      ChangeIcon
    }
  }
})
</script>
