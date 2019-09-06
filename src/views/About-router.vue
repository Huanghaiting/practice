<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 在组件中用this.$route.params来获取参数的值 -->
    <!-- <p>num:{{$route.params.num}}</p> -->
    <!-- 嵌套路由 -->

    <!-- 多层的动态视图可以使用vue内置的组件component来实现，但使用component切换的视图会在页面刷新后回到初始状态 -->
    <!-- 而使用路由分发的视图在页面刷新后会保持在当前路径对应的视图，并在浏览器的history中留下记录 -->
    <div @click="toggleView('myCom1')">测试一</div>
    <div @click="toggleView('myCom2')">测试二</div>
    <component :is="tab"></component>
    <!-- 嵌套的动态视图区 -->
    <router-view></router-view>
  </div>
</template>
<script>
import myCom1 from '../components/component-demo'
import myCom2 from '../components/component-demo copy'
export default {
  components: { myCom1, myCom2 },
  data () {
    return {
      tab: 'myCom1',
      newRouter: null
    }
  },
  watch: {
    newRouter: {
      handler: 'logRouter'
    }
  },
  methods: {
    toggleView (view) {
      this.tab = view
    },
    logRouter (value) {
      console.log(value)
    }
  },
  beforeUpdate () {
    this.newRouter = this.$route.path
    console.log(this.$route)
  }
}
</script>
// 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
// 可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中，例如：
// 模式                             匹配路径                  $route.params
// /user/:username                 /user/evan               { username: 'evan' }
// /user/:username/post/:post_id   /user/evan/post/123      { username: 'evan', post_id: '123' }
