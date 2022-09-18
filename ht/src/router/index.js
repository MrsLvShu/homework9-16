import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/dashboard',
    component: HomeView,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '主页',
          path: '/dashboard'
        },
    },
      {
        path: '/marketList',
        name: 'marketList',
        meta: {
          title: '/ 限时活动',
          leader: '营销管理',
          path:'/marketList'
        },
        component: () => import('../views/marketList.vue')
      }, 
      {
        path: '/orderList',
        name: 'orderList',
        meta: {
          title: '/ 订单列表',
          leader: '订单管理',
          path: '/orderList'
        },
        component: () => import('../views/orderList.vue')
      },
      {
        path: '/productList',
        name: 'productList',
        meta: {
          title: '/ 商品列表',
          leader: '商品管理',
          path:'productList'
        },
        component: () => import('../views/productList.vue')
      },
      {
        path: '/userList',
        name: 'userList',
        meta: {
          title: '/ 用户列表',
          leader: '注册用户管理',
          path:'userList'
        },
        component: () => import('../views/userList.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router
