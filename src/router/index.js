import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
<<<<<<< HEAD
import store from "@/store";
=======
>>>>>>> fd985e3b6ccf19b03abeb74a653d7312dc49a9b3

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'card',
      component: card
    }
  ]
})
