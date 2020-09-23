<template>
  <div>
    <span @click="doClick">香蕉</span>
  </div>
</template>

<script>
const path = require("path");

export default {
  name: "banana",
  created() {
    console.log(path.resolve("package.json"), "resolve");
    console.log(path.basename("package.json"), "basename");
    console.log(path.dirname("package.json"), "dirname");
    console.log(path.extname("package.json"), "extname");
    console.log(path.join("/", "package.json"), "join");
    console.log(path.basename("package.json", ".json"), ".json");
    console.log(path.isAbsolute("/package.json"), "isAbsolute");
    console.log(path.isAbsolute("package.json"), "isAbsolute");
    // console.log(path.parse("/app.js"), "parse");
  },
  mounted() {},
  methods: {
    doClick() {
      this.$router.push({ name: "carrot" });
    },
    do() {
      new Promise((resolve, reject) => {
        reject("这是一个错误");
      })
        .then(res => {
          console.log(res, "resolve");
        })
        .catch(error => {
          console.log(error, "失败");
        });
    }
  }
};
</script>

<style scoped>
</style>