import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DynamicComponent from './components/DynamicComponent'
import SlotMain from './views/SlotMain'
import transition from './views/transition'
import author from './components/author'
import email from './components/email'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/DynamicComponent',
    name: 'DynamicComponent',
    component: DynamicComponent
  }, {
    path: '/SlotMain',
    name: 'SlotMain',
    component: SlotMain
  }, {
    path: '/transition',
    name: 'transition',
    component: transition
  }, {
    // path: '/about/:num', // 动态路由：定义了参数num
    path: '/about', // 基本路由&嵌套路由
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* webpackChunkName: "about" */
    component: () => import('./views/About-router.vue'),
    children: [{
      path: 'author',
      component: author
    }, {
      path: 'email',
      component: email
    }]
  }]
})
//  {
//   path: '/render',
//   name: 'render',
//   component: Render
// }
