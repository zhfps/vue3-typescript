<template>
<el-container>
    <el-header class="header" height="44px">
     <Header :icon="icon" @change-icon="ChangeIcon"/>
    </el-header>
    <el-container>
    <el-aside class="aside" :style="{width}">
      <Aside :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <Tags></Tags>
      <el-main style="backgroun-color: #fff">
        <router-view/>
      </el-main>
      <el-footer>{{icon}}</el-footer>
    </el-container>
    </el-container>
</el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from './header/header.vue'
import Aside from './aside/aside.vue'
import Tags from './tags/tags.vue'
import './layout.scss'
export default defineComponent({
  name: 'layout',
  components: {
    Header,
    Aside,
    Tags
  },
  setup() {
    const isCollapse = ref(false)
    const width = ref('220px')
    const icon = ref('el-icon-s-fold icon')
    const ChangeIcon = (e: string) => {
      if (e === 'el-icon-s-fold icon') {
        icon.value = 'el-icon-s-unfold icon'
        width.value = '64px'
      } else {
        icon.value = 'el-icon-s-fold icon'
        width.value = '220px'
      }
      isCollapse.value = !isCollapse.value
    }
    return {
      isCollapse,
      width,
      icon,
      ChangeIcon
    }
  }
})
</script>
