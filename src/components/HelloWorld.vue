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
      <a href="javascript:;" @click="first">通过methods方法执行 actions动作(异步)</a>
    </div>
    <div>
      <a href="javascript:;" @click="$router.push('/card')">跳转card组件,进行展示</a>
    </div>
    <div class="serBtn">
      <Button type="primary" class="header-btn" @click="handleExport">导出</Button>&nbsp;
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import XLSX from 'xlsx'


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
    handleExport () {
      const wb = XLSX.utils.book_new()
      let data = [
        { A:"S", B:"h", C:"e", D:"e", E:"t", F:"J", G:"S" },
        { A: 12,  B: 2,  C: 3,  D: 4,  E: 5,  F: 6,  G: 7212312  },
        { A: 2,  B: 3,  C: 4444,  D: 5,  E: 6,  F: 7,  G: 8  }
      ]
      var ws = XLSX.utils.json_to_sheet(data, {header:["A","B","C","D","E","F","G"], skipHeader:true})
      ws['A1'].s = {
        alignment: {
          vertical: 'center',
          horizontal: 'center',
        },
        font: {
          bold: true
        },
        border: {
          top: {
            color: { rgb: "FFFFAA00" }
          }
        }
      }
      let autoWidth = data.map(p => {
        let list = []
        for(let k in p) {
          return list.concat({ wch: p[k].toString().length * 3})
        }
      })
      let result = autoWidth[0]
      autoWidth.forEach(p => {
        p.forEach((n, o) => {
          if (result[o].wch < n.wch) {
            result[o].wch = n.wch
          }
        })
      })
      ws['!cols'] = result
      XLSX.utils.book_append_sheet(wb, ws, '人生')
      XLSX.writeFile(wb, '人生.xlsx')
    },
    ...mapMutations(["USER_LOGIN_INFO", "POSITION", "SITE_ID", "ACCOUNT", "SITE_NAME"]),
    ...mapActions(["Acount"]),
    first() {
      this.Acount({ n: 1 })
      console.log(213)
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
