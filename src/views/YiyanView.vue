<template>
  <div class="artlist" ref="artlist">
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
              <el-divider></el-divider>
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
    <div class="button_boxlt" v-show="toTopShow">
      <img src="../assets//img/backTop.png" @click="TopBotton" />
    </div>
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
      toTopShow: false,
      scrollToptval: 0,
    };
  },
  beforeRouteLeave(to, from, next) {
    this.scrollToptval = this.$refs.artlist.scrollTop;

    next();
  },
  activated() {
    console.log("actived++++++");
    this.$refs.artlist.scrollTop = this.scrollToptval;
  },
  created() {},
  mounted() {
    localStorage.setItem("token", this.token);
    this.getYiyan();
    this.getStoryList();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  watch: {},
  computed: {},
  methods: {
    handleScroll() {
      this.scrollToptval = Math.floor(
        document.body.scrollTop || document.documentElement.scrollTop
      );
      if (this.scrollToptval > 350) {
        this.toTopShow = true;
      } else {
        this.toTopShow = false;
      }
    },

    TopBotton() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let timer = setInterval(() => {
        scrollTop -= 100;
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 16.7);
    },

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
.mask {
  background-color: #bcc6ca;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.fenye {
  float: right;
  margin: 40px 300px 40px 0;

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
.el-divider--horizontal {
  margin: 0;
}
.button_boxlt {
  position: fixed;
  cursor: pointer;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius:5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.button_boxlt img {
  width: 100%;
  height: 100%;
}
</style>