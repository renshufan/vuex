<template>
  <div class="hello">
    <!--    <el-breadcrumb separator="/">-->
    <!--      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) in arr">{{item}}</el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    <!--    </el-breadcrumb>-->
    <h1>{{ $store.state.Heade.count }}</h1>
    <h1>{{ $store.state.Content.cont }}</h1>
    <div slot="renshufan">444</div>
    <div>
      <a href="javascript:;" @click="$store.commit('Count', { n: 1 })"
        >click mutations突变(同步)11111</a
      >
    </div>
    <div>
      <a href="javascript:;" @click="$store.dispatch('Acount', { n: 1 })"
        >click actions动作(异步)</a
      >
    </div>
    <div>
      <a href="javascript:;" @click="first"
        >通过methods方法执行 actions动作(异步)51112</a
      >
    </div>
    <div>
      <!--      <a href="javascript:;" @click="$router.push('/card')">跳转card组件,进行展示4</a>-->
      <a href="javascript:;" @click="card">跳转card组件,进行展示4</a>
    </div>
    <div class="name">
      <!-- <card></card> -->
      <slot name="renshufan">123</slot>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

var book = {
  _year: 2004,
  edition: 1
}
// Object.defineProperty(book, 'year', {
//   get() {
//     return this._year
//   },
//   set(newValue) {
//     if (newValue > 2004) {
//       this._year = newValue
//       this.edition += newValue - 2004
//     }
//   }
// })
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: [],
      age: {
        food: 10,
        year: 20,
        toString() {
          //重写此对象的 toString方法
          return this.food
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('USER_LOGIN_INFO')
      this.$store.commit('POSITION')
      this.$store.commit('SITE_ID')
      this.$store.commit('ACCOUNT')
      this.$store.commit('SITE_NAME')
    })
  },
  activated() {
    alert(this.msg)
  },
  methods: {
    ...mapMutations([
      'USER_LOGIN_INFO',
      'POSITION',
      'SITE_ID',
      'ACCOUNT',
      'SITE_NAME'
    ]),
    ...mapActions(['Acount']),
    card() {
      this.msg = '3333'
      this.$router.push({ name: 'card', params: { name: 1 } })
    },
    first() {
      this.Acount({ n: 1 })
      this.arr = ['111', '222']
      console.log(Object.keys(this.age), 123)
      // console.log(this.age.toString())
      book.year = 2005
      // alert(book.edition)
      // console.log(book, this.age.valueOf(), t////////his.age.toString())
      // this.$store.dispatch('Acount',{n:100})
      // let a = /[0-9]/g;
      // console.log(a instanceof RegExp)
    }
  },
  beforeDestroy() {},
  destroyed() {
    // alert('销毁完成')
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
.name::after {
  content: "我是谁";
  color: red;
}
.name::before {
  content: "谁是我";
  color: red;
}
</style>
