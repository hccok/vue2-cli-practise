<template>
  <div  class="artlist">
    <div class="bgcImg">
      <div class="mask"></div>
      <p class="onetext">{{ onetext.hitokoto }}</p>
    </div>
    <div class="main">
      <div>
        <ArticleLi
          v-for="item in this.articleData.list"
          :key="item.info_id"
          style="margin: 0 auto"
          :articleList="articleData.list"
        >
          <template>
            <div class="art-item">
              <h4 class="article-title" @click="handleDetail(item.info_id)">
                {{ item.info_name }}
              </h4>
              <p class="article-exp" v-html="item.info_excerpt"></p>
            </div>
          </template>
        </ArticleLi>
      </div>
      <div class="fenye">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          @current-change="currentChange"
        >
        </el-pagination>
      </div>

    </div>
    <el-backtop target=".artlist " :bottom=80 :right=80>
        <i class="el-icon-caret-top"></i>
      </el-backtop>
  </div>
</template>

<script>
import axios from "axios";
import ArticleLi from "../components/ArticleLi";

export default {
  components: { ArticleLi },
  props: {},
  data() {
    return {
      token: "14a4ba0c7c0b8c7974bc9087ef5987b5",
      onetext: {},
      articleData: {},
      pageStart: 0,
      a: 22668,
      page: 1,
    };
  },
  created() {},
  mounted() {
    localStorage.setItem("token", this.token);

    this.getYiyan();
    this.getStoryList();
  },
  watch: {},
  computed: {},
  methods: {
    getYiyan() {
      axios
        .get("https://v1.hitokoto.cn/?c=b")
        .then((res) => {
          console.log(res.data);
          this.onetext = res.data;
        })
        .catch(console.error);
    },
    getStoryList() {
      axios
        .get("/apis/gushi/item/", {
          params: {
            token: this.token,
            pageStart: this.pageStart,
          },
        })
        .then((res) => {
          this.articleData = res.data.data;
          // console.log(this.articleData);
        })
        .catch(console.error);
    },
    handleDetail(id) {
      localStorage.setItem("id", id);
      if (this.$router.currentRoute.path !== `/article/${id}`) {
        this.$router.push(`/article/${id}`);
      }
    },
    currentChange(val) {
      console.log("翻页，当前为第几页", val);
      this.page = val;

      this.pageStart = this.a + (this.page - 1) * 10;

      this.getStoryList();
    },
  },
};
</script>
<style scoped>
.artlist{
  height: 100vh;
  overflow-x: hidden;
}
.mask {
  background-color: #bcc6ca;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.fenye {
  float: right;
  margin-right: 300px;
}
.bgcImg {
  position: relative;
  background-color: #346a8b;
  background: url(https://api.imacroc.cn/acg/) no-repeat;
  width: 100%;
  height: 600px;
  opacity: 0.9;
}
.onetext {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.art-item {
  margin-top: 40px;
}
.article-title {
  margin-bottom: 10px;
  padding: 0;
  font-size: 26px;
  line-height: 60px;
  text-align: center;
  color: rgb(99, 98, 98);
  cursor: pointer;
}
.article-exp {
  padding: 0 20px;
  color: #aaa7a7;
  text-indent: 2em;
  line-height: 40px;
}
</style>