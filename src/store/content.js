import more from './more-mutations'
const {
  USER_LOGIN_INFO,
  POSITION,
  SITE_ID,
  ACCOUNT,
  SITE_NAME,
} = more;
console.log(USER_LOGIN_INFO, POSITION, SITE_ID, SITE_ID, SITE_NAME);

export default {
  state: {
    cont: 10,
    userLoginInfo: '',
    siteName: '',
    account: '',
    position: '',
    siteId: '',
  },
  mutations: {
    // 同步执行，通过devtoo日志捕捉到state状态变化
    Count (state, playout) {
      var flag;
      flag = playout?true:false;
      if(flag){
        state.cont = state.cont +  parseInt(playout.n);
      }else return;
    },
    // 使用常量来进行突变
    [USER_LOGIN_INFO](state) {
      state.userLoginInfo = {id:131415926, name:"任淑凡", account:150987653246, position:1,siteId:16412345542};
    },
    [POSITION](state) {
      state.position = 1;
    },
    [SITE_ID](state) {
      state.siteId = 16412345542;
    },
    [ACCOUNT](state) {
      state.account = 150987653246;
    },
    [SITE_NAME](state) {
      state.siteName = '任淑凡';
    },
  },
  actions: {
    Acount ({ state, commit }, data) {
      commit('Count', data)
    }
  },
  getters:{
    userLoginInfo(state){
      return state.userLoginInfo;
    },
    position(state){
      return state.position;
    },
    siteId(state){
      return state.siteId;
    },
    account(state){
      return state.account;
    },
    siteName(state){
      return state.siteName;
    },
  }
}
