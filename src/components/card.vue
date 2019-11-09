<template>
    <div>
      <div>{{userLoginInfo}}</div>
      <div>站点:{{position}}</div>
      <div>{{position}}</div>
      <div>{{siteId}}</div>
      <div>{{siteName}}</div>
      <div>{{account}}</div>
      <a href="javascript:;" @click="$router.push('/')">点击跳转首页2</a>
    </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
        name: "card",
        computed:{
          ...mapState({
            count: state => state.Heade.count,
          }),
          ...mapGetters([
            "userLoginInfo",
            "position",
            "siteId",
            "siteName",
            "account"
          ])
        },
        created () {
          this.vantSumbit()
        },
        methods:{
          ...mapActions([
            'Acount'
          ]),
          vantSumbit () {
            console.log(this.userLoginInfo)
          }
        }
    }
</script>

<style scoped>

</style>
