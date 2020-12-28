<template>
  <div class="tags">
    <Tag title="首页" icon="el-icon-house" path="/" :active="false"></Tag>
    <Tag title="关于" icon="el-icon-plus" path="/about" :active="true"></Tag>
    <el-dropdown class="left-top">
      <span class="el-dropdown-link">
        <i class="el-icon-plus el-icon--right el-tag__close"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">关闭所有</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">关闭左边</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">关闭右边</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">关闭当前</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Tag from './tag.vue';
export default defineComponent({
  name: 'Tags',
  components: {
    Tag
  }
});
</script>
<style>
a {
  color: #000;
  text-decoration: none;
}
.tags {
  display: flex;
  align-items: center;
  border-radius: 15px 15px 0 0;
  height: 32px;
  background: #eee;
  position: relative;
  z-index: 100;
}
.tag-item {
  display: inline-block;
  padding: 0 10px;
  background-color: #eee;
  line-height: 32px;
  font-size: 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}
.tag-active {
  background-color: #fff;
  border-radius: 0 14px 0 0;
}
.tag-no-active {
  background-color: #eee;
}
.left-top {
  border-radius: 14px 0 0 0;
}
.right-top {
  border-radius: 0 14px 0 0;
}
</style>
