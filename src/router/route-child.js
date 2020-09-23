import homeMain from "@/components/home-main/home-main";
// 在二级菜单栏下的路由component设置 ParentView 显示三级菜单栏
import ParentView from '@/components/home-main/parent-view'

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
        path: "/banana",
        name: "banana",
        component: ParentView,
        meta: {
          title: '香蕉',
          keepAlive: true
        },
        children: [
          {
            path: "/banana1",
            name: "banana1",
            component: () => import('@/view/fruit/banana/banana.vue'),
            meta: {
              title: '香蕉1',
              keepAlive: true
            }
          }
        ]
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
        path: "/carrot",
        name: "carrot",
        component: () => import('@/view/vegetable/carrot/carrot.vue'),
        meta: {
          title: '胡萝卜',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/ball",
    name: "ball",
    redirect: "/carrot",
    component: () => homeMain,
    meta: {
      title: '足球',
      keepAlive: true
    },
  }
]