import {
  USER_LOGIN_INFO,
  POSITION,
  SITE_ID,
  ACCOUNT,
  SITE_NAME,
}from './more-mutations'
export default {
  state: {
    count: 0,
  },
  mutations: {
    // 同步执行，通过devtoo日志捕捉到state状态变化
    Count (state, playout) {
        var flag;
        flag = playout?true:false;
        if(flag){
          state.count = state.count +  parseInt(playout.n);
        }else return;
    },
    // 异步执行，通过devtoo日志捕捉不到state状态变化
    first (state, playout){
      var flag;
      flag = playout?true:false;
      if(flag){
        setTimeout(()=>{
          state.count = state.count +  parseInt(playout.n);
        },500)
      }else return;
    }
  },
  actions: {
    Acount ({commit}) {
      commit({
        type:'Count',
        n:1
      })
      // setTimeout(() => {
      //   commit({
      //     type:'Count',
      //     n:1
      //   })
      // }, 100)
    },
  },
  getters:{
  }
}
