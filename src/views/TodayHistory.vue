<template>
  <div>
    <div class="container">
      <div class="topbar">
        <h1 style="margin-right: 40px">
          {{
            this.title == "知乎热榜" ? this.title.slice(0, -2) : this.title
          }}热搜排行榜
        </h1>
        <el-dropdown
          size="medium"
          split-button
          type="info"
          @command="handleCommand"
        >
          其他热搜榜
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="douyin">抖音</el-dropdown-item>
            <el-dropdown-item command="zhihu">知乎</el-dropdown-item>
            <el-dropdown-item command="weibo">微博</el-dropdown-item>
            <el-dropdown-item command="bilihot">哔哩哔哩</el-dropdown-item>
            <el-dropdown-item command="sspai">少年派</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="index" label="序号" width="50" align="center">
          </el-table-column>
          <el-table-column prop="hot" label="热度" width="180" align="center">
            <template slot-scope="scope">
              <img
                src="../assets/icon/hot.png"
                style="width: 19px; height: 19px; line-height: 100%"
              />
              <span style="margin-left: 10px; font-size: 12px">
                {{ scope.row.hot !== "万" ? scope.row.hot : "--万" }}</span
              >
            </template>
          </el-table-column>
          <el-table-column prop="title" label="事件" align="center">
          </el-table-column>
          <el-table-column label="详情" width="300" align="center">
            <template slot-scope="scope">
              <a :href="scope.row.url" style="color: skyblue" target="_blank"
                >点击了解详情</a
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="paging">
        <el-pagination @size-change="sizeChange" @current-change="currentChange"
      :current-page="page" :page-size="size" :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  props: {},
  data() {
    return {
      todayInfro: null,
      title: null,
      page: 1, //第几页
      size: 10, //一页多少条
      total: 0, //总条目数
      pageSizes: [5, 10, 20, 30, 50, 100], //可选择的一页多少条
      tableData: [],
    };
  },
  created() {
    this.getTodayInfro("douyin");
  },
  mounted() {
    
  },
  watch: {
    todayInfro:function(){    
      this.getTabelData2();
    }
  },
  computed: {},
  methods: {
    async getTodayInfro(e) {
      await axios
        .get("https://api.loneag.com/api/hotlist", {
          params: {
            type: e,
          },
        })
        .then((res) => {
          console.log(res);
          this.todayInfro = res.data.data;
          this.title = res.data.title;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCommand(command) {
      this.getTodayInfro(command);
    },
    getTabelData() {
      this.tableData = this.todayInfro.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
      this.total=this.todayInfro.length
    },
    getTabelData2() {
      let data=JSON.parse(JSON.stringify(this.todayInfro))
      this.tableData = data.splice(
        (this.page - 1) * this.size,
        this.size
      );
      this.total=this.todayInfro.length;
      console.log(this.tableData);
    },
        //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      console.log("翻页，当前为第几页", val);
      this.page = val;
      this.getTabelData2();
    },
    sizeChange(val) {
      console.log("改变每页多少条，当前一页多少条数据", val);
      this.size = val;
      this.page = 1; 
      this.getTabelData2();
    },
  },
};
</script>
<style scoped>
.container {
  margin: 0 auto;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.paging {
  margin-top: 40px;
  margin-right: 40px;
  float: right;
}
</style>