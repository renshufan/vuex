<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
