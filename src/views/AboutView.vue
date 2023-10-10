<template>
  <div>
    <div style="width:400px;height:200px;background-color:#465126;" @contextmenu.prevent="onContextmenu">
      <div style="width:200px;height:100px;background-color:#254632;" @contextmenu.prevent="onContextmenu"></div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    onContextmenu(event) {
      // console.log("event.x",event.x);
      // console.log("event.y",event.y);
      if(event.x>200 || event.y>161){
        this.$contextmenu({
        items: [
        {
            label: "大盒子",
            onClick: () => {
              this.message = "大盒子";
              console.log("大盒子");
            }
          },
          { label: "大盒子test1", disabled: true },
          {label:"大盒子test2",icon:"el-icon-delete-solid"},
          {
            label: "大盒子test3",
            divided: true,
            minWidth: 0,
            children: [{ label: "001" }, { label: "002" }]
          }
        ],
        event, // 鼠标事件信息
        customClass: "custom-class", // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
      });
      return false;
      }else{
        this.$contextmenu({
        items: [
          {
            label: "小盒子",
            onClick: () => {
              this.message = "小盒子";
              console.log("小盒子");
            }
          },
          { label: "小盒子test1", disabled: true },
          {label:"小盒子test2",icon:"el-icon-share"},
          {
            label: "小盒子test3",
            divided: true,
            minWidth: 0,
            children: [{ label: "001" }, { label: "002" }]
          }
        ],
        event, // 鼠标事件信息
        customClass: "custom-class", // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
      });
      return false;
      }

    },
  },
  data(){
    return{
      
    }
  }
};

</script>
<style lang="scss" scoped>
</style>