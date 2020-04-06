import homeMain from "@/components/home-main/home-main";

export default [
  {
    path: "/fruit",
    name: "fruit",
    component: homeMain,
    redirect: '/fruit/banana',
    meta: {
      title: '水果种类',
      keepAlive: true
    },
    children: [
      {
        path: "banana",
        name: "banana",
        component: () => import('@/view/fruit/banana/banana.vue'),
        meta: {
          title: '香蕉',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/vegetable",
    name: "vegetable",
    component: homeMain,
    meta: {
      title: '蔬菜种类',
      keepAlive: true
    },
    children: [
      {
        path: "carrot",
        name: "carrot",
        component: () => import('@/view/vegetable/carrot/carrot.vue'),
        meta: {
          title: '胡萝卜',
          keepAlive: true
        }
      }
    ]
  }
]