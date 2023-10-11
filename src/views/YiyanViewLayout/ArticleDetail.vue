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
  width: 100%;
  height: 100%;

}
.article{
  width: 60%;
  margin: 20px auto;
  border-radius:5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
  margin-top: 20px;
}

.button_boxlt {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
}
.button_boxlt img {
  width: 100%;
  height: 100%;
}
</style>