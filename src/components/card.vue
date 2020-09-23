<template>
  <div>
    <div>{{ userLoginInfo }}</div>
    <div>站点:{{ position }}</div>
    <div>{{ position }}</div>
    <div>
      {{ siteId }}
    </div>
    <div>{{ siteName }}</div>
    <div>{{ account }}</div>
    <a href="javascript:;" @click="$router.push('/')">card</a>
    <div @click="vantSubmit">提交</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "card",
  data() {
    return {
      kind: [],
      name: undefined,
      user: 0
    };
  },
  computed: {
    ...mapState({
      count: state => state.Heade.count
    }),
    ...mapGetters([
      "userLoginInfo",
      "position",
      "siteId",
      "siteName",
      "account",
      "userLoginInfo",
      "position",
      "siteId",
      "siteName",
      "account"
    ])
  },
  created() {
    console.log(this.$route.params);
  },
  beforeDestroy() {},
  destroyed() {
    alert("销毁完成1");
  },
  methods: {
    ...mapActions(["Acount"]),
    vantSubmit() {
      // this.Acount({ n: 10 });
      this.Acount({ n: 1 });
      if (this.kind) {
        console.log(this.$route);
        console.log(null == undefined, 1);
      }
      if (this.name) {
        console.log(this.name == true, 2);
      }
      if (this.user) {
        console.log(this.user == true, 3);
      }
      setTimeout(() => {
        console.log(123);
      }, 0);
      new Promise((resolve, err) => {
        resolve();
      }).then(() => {
        console.log(321);
      });
      console.log(444);
    }
  }
};
</script>

<style scoped></style>
