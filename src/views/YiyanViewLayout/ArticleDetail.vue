<template>
  <div>
    <div class="bgImg">
      <el-page-header @back="goBack" :content="artDetail.info_name"> </el-page-header>
      <div class="article">
        <h2 class="art-title">{{ artDetail.info_name }}</h2>
        <p class="art-con" v-html="artDetail.info_content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "articleDetail",
  components: {},
  props: {},
  data() {
    return {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      artDetail:{}
    };
  },
  created() {},
  mounted() {
    this.getArticleDetail(this.id)
  },
  watch: {},
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getArticleDetail(id) {
      axios
        .get("/apis/gushi/index/", {
          params: {
            token: this.token,
            id: id,
          },
        })
        .then((res) => {
          console.log(res);
          this.artDetail = res.data.data;
        })
        .catch(console.error);
 
    },
  },
};
</script>
<style scoped>
.bgImg{
  background-color: #b6d4e6;
  width: 100%;
  height: 100%;

}
.article{
  width: 80%;
  margin: 0 auto;
}
.art-title{
  height: 60px;
  line-height: 60px;
  text-align: center;

}
.art-con{
  padding: 10px 60px;
  line-height: 50px;
  text-indent: 2em;
}
.el-page-header{
  margin-top: 40px;
}
</style>