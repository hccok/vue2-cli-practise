
import NavBar from './components/NavBar.vue';
<template>
  <div id="app">
    <NavBar/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default{
  components:{
    NavBar
  }
}

</script>


<style>

*{
  margin: 0;
  padding: 0;
}
</style>
