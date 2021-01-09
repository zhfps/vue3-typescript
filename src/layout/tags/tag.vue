<template>
  <div :class="{ 'tag-no-active': active, 'tag-active': !active}"  @click="toLink(path)">
    <span :class="{ 'tag-item':true, 'tag-no-active': !active, 'tag-active': active}">
       <i :class="icon"></i>
       <router-link :to="path" exact>{{title}}</router-link>
       <i class="el-tag__close el-icon-close"></i>
     </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'Tag',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true,
      default: '/'
    }
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router
    const toLink = (path: string) => {
      console.log(path)
      console.log(router.currentRoute.value.path)
      console.log(ctx)
    }
    return {
      toLink
    }
  }
})
</script>
