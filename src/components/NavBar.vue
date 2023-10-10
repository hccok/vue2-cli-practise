<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">Home</el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">Api</template>
        <el-menu-item index="/today">今日热搜</el-menu-item>
        <el-menu-item index="/yiyan">一言</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/table"
        >Table</el-menu-item
      >
      <el-menu-item index="/about"
        >RightMenu</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  created() {},
  mounted() {},
  watch: {

  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex=key
    },
  },
};
</script>
<style  scoped>

.el-menu.el-menu--horizontal a{
  text-decoration: none;
}
.el-menu-item a{
  text-decoration: none;
  color: aliceblue;
}
</style>