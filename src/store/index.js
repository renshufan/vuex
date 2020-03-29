import Vue from "vue";
import vuex from "vuex";
import HeadeStore from "./heade"; //引入刚才的heade.js
import ContentStore from "./content"; //引入content.js
import router from "../router/route-child"; //引入content.js
import VuexPersistence from "vuex-persist"; // 引入vue-persist 持久化存储 页面刷新后 vuex数据依然存在

Vue.use(vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new vuex.Store({
  modules: {
    Heade: HeadeStore,
    Content: ContentStore
  },
  state: {
    router: router,
  },
  getters: {
    router(state) {
      return state.router
    }
  },
  plugins: [vuexLocal.plugin]
});
