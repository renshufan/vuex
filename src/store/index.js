import Vue from 'vue'
import vuex from 'vuex'
import HeadeStore from './heade';//引入刚才的heade.js
import ContentStore from './content' //引入content.js

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    Heade: HeadeStore,
    Content: ContentStore
  }
})
