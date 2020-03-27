import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
import store from "@/store"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // redirect: '/card'
    },
    {
      path: '/card',
      name: 'card',
      component: card
    }
  ]
})
