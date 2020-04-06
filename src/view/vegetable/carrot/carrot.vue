<template>
  <div>
    <span @click="doClick">胡萝卜</span>
    <svg class="my">
      <use xlink:href="/static/home.svg#my" class="pid"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "carrot",
    methods: {
      doClick () {
        this.$router.push({ name: 'banana' })
      }
    }
  }
</script>

<style scoped>
  .my {
    width: 30px;
    height: 30px;
    fill: #42b983;
    /*background: #B3C0D1;*/
  }
  .pid {
    background: red;
  }
</style>