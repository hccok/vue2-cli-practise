
<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ArticleLi",
  components: {},
  props: {
    articleList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    handleDetail(item) {
      console.log(item);
    },
  },
};
</script>
<style scoped>
.block {
  border-radius:5px;
  width: 60%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.block:hover {
  background-color: rgb(232, 243, 247);
}
</style>