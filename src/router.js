import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DynamicComponent from './components/DynamicComponent'
import SlotMain from './views/SlotMain'
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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* webpackChunkName: "about" */
    component: () => import('./views/About.vue')
  }]
})
//  {
//   path: '/render',
//   name: 'render',
//   component: Render
// }
