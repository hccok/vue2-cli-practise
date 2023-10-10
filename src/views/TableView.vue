<template>
  <div class="table">
    <el-table
      ref="multipleTable"
      row-key="id"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{ prop: 'amount', order: 'descending' }"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="amount" label="金额(元)" sortable :sort-method="sortByAmount" >
        <template slot-scope="scope">{{ scope.row.amount }}</template>
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" size="mini">编辑</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from "sortablejs";

export default {
  name: "TableView",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "123",
        },
        {
          date: "2016-05-02",
          name: "王小小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "423",
        },
        {
          date: "2016-05-04",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "147",
        },
        {
          date: "2016-05-01",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "365",
        },
        {
          date: "2016-05-08",
          name: "王三虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "985",
        },
        {
          date: "2016-05-06",
          name: "王四虎",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "753",
        },
        {
          date: "2016-05-07",
          name: "王芜湖",
          address: "上海市普陀区金沙江路 1518 弄",
          amount: "999",
        },
      ],
      multipleSelection: []
    };
  },
  created() {},
  mounted() {
    this.rowDrop();
  },
  watch: {},
  computed: {},
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    sortByAmount(obj1, obj2) {
      let a = obj1.amount;
      let b = obj2.amount;
      return a - b;
    },
    rowDrop() {
        const el = this.$refs.multipleTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
        this.sortable = Sortable.create(el, {
          ghostClass: 'sortable-ghost',
          setData: function(dataTransfer) {
            dataTransfer.setData('Text', '')
          },
          onEnd: evt => {
            const targetRow = this.tableData.splice(evt.oldIndex, 1)[0];
            this.tableData.splice(evt.newIndex, 0, targetRow);
          }
        });
      },
  },
};
</script>
<style lang="scss" scoped>
</style>