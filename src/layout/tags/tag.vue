<template>
  <div :class="{ 'tag-no-active': active, 'tag-active': !active}">
    <span :class="{ 'tag-item':true, 'tag-no-active': !active, 'tag-active': active}">
       <i :class="icon"></i>
       <router-link :to="path" exact>{{title}}</router-link>
       <i class="el-tag__close el-icon-close"></i>
     </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
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
  }
})
</script>
