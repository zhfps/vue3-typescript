<template>
  <div class="aside-container">
    <el-menu
      :uniqueOpened="true"
      :collapse="isCollapse"
      mode="vertical"
      default-active="2"
      collapse-transition="true"
      class="menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true"
      >
        <template v-for="item in menus[0].children">
        <template v-if="item.children && item.children.length>0">
          <el-submenu :key="item.name" :index="item.path">
            <template #title>
              <i :class="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-submenu
                v-if="subItem.children.length>0"
                :key="subItem.id"
                :index="subItem.path"
              >
                <template #title>
                  <i :class="subItem.meta.icon" />
                  <span>{{ subItem.meta.title }}</span>
                </template>
                <el-menu-item
                  v-for="threeItem in subItem.children"
                  :key="threeItem.id"
                  :index="threeItem.path"
                >
                  <template #title>
                    <i :class="threeItem.meta.icon" />
                    <span>{{ threeItem.meta.title  }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :key="subItem.name"
                :index="subItem.path"
              >
                <template #title>
                  <i :class="subItem.meta.icon " />
                  <span>{{ subItem.meta.title  }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.id" :index="item.path">
            <i :class="item.meta.icon " />
            <span>{{ item.meta.title  }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getRoutes } from '@/router'
export default defineComponent({
  name: 'Aside',
  props: {
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const menus = getRoutes();

    return {
      menus
    }
  }
})
</script>
