<template>
  <div class="table">
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img style="object-fit: scale-down;width: 100%;height: 100%;" :src="item.idView" :alt="item.id">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      imgList:[
        {di:0,idView:require('@/assets/img/001.jpg')},
        {di:1,idView:require('@/assets/img/002.jpg')},
        {di:2,idView:require('@/assets/img/003.jpg')},
        {di:3,idView:require('@/assets/img/004.jpg')},
      ]
    }
  },
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table{
    width: 500px;
    margin: 0 auto;
  }
</style>
