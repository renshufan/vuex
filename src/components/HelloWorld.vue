<template>
  <div class="hello">
    <h1>{{ $store.state.Heade.count }}</h1>
    <h1>{{ $store.state.Content.cont }}</h1>
    <div>
      <a href="javascript:;" @click="$store.commit('Count',{n:1})">click mutations突变(同步)</a>
    </div>
    <div>
      <a href="javascript:;" @click="$store.dispatch('Acount',{n:1})">click actions动作(异步)</a>
    </div>
    <div>
      <a href="javascript:;" @click="first">通过methods方法执行 actions动作(异步)51112</a>
    </div>
    <div>
      <a href="javascript:;" @click="$router.push('/card')">跳转card组件,进行展示4</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit("USER_LOGIN_INFO")
      this.$store.commit("POSITION")
      this.$store.commit("SITE_ID")
      this.$store.commit("ACCOUNT")
      this.$store.commit("SITE_NAME")
    })
  },
  methods: {
    ...mapMutations([
      "USER_LOGIN_INFO",
      "POSITION",
      "SITE_ID",
      "ACCOUNT",
      "SITE_NAME"
    ]),
    ...mapActions(["Acount"]),
    first () {
      this.Acount({ n: 0 })
      this.$request.post('少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所', req)
      .then(res => {
        console.log(123)
      })
      // this.$store.dispatch('Acount',{n:100})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
