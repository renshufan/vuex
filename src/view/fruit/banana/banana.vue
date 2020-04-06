<template>
  <div>
    <span @click="doClick">香蕉</span>
  </div>
</template>

<script>
  export default {
    name: "banana",
    methods: {
      doClick () {
        this.$router.push({ name: 'carrot' })
      }
    },
    created() {
      this.$router.replace(this.$route.name, this.$route.path,)
    }
  }
</script>

<style scoped>

</style>