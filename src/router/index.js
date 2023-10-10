import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
    component: HomeView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/TableView.vue')
  },
  {
    path: '/today',
    name: 'today',
    component: () => import('../views/TodayHistory.vue')
  },
  {
    path: '/yiyan',
    name: 'yiyan',
    component: () => import('../views/YiyanView.vue'),
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/YiyanViewLayout/ArticleDetail.vue'),

  }


]

const router = new VueRouter({
  routes
})

export default router
