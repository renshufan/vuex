<template>
    <div>
      <div>{{userLoginInfo}}</div>
      <div>站點名稱{{position}}</div>
      <div>{{siteId}}</div>
      <div>{{siteName}}</div>
      <div>{{account}}</div>
      <a href="javascript:;" @click="$router.push('/')">跳转首页</a>
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
        methods:{
          ...mapActions([
            'Acount'
          ]),
        }
    }
</script>

<style scoped>

</style>
