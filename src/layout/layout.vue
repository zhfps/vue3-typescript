<template>
<el-container>
  <el-aside class="aside" style="width: 220px;">
    <Aside/>
  </el-aside>
  <el-container>
    <el-header class="header" height="44px">
     <Header icon="el-icon-s-fold"/>
    </el-header>
    <el-main>
       <router-view/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './header/header.vue'
import Aside from './aside/aside.vue'
import './layout.scss'
export default defineComponent({
  name: 'layout',
  components: {
    Header,
    Aside
  }
})
</script>
