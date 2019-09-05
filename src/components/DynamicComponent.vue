<template>
  <div>
    <ul class="tabs">
      <li class="per-tab"
          @click="toggleView('myCom1')">首页</li>
      <li class="per-tab"
          @click="toggleView('myCom2')">关于</li>
    </ul>

    <div class="tab-content">
      <component :is="tab"></component>
    </div>

    <input type="radio"
           v-model="tab"
           value="myCom1">组件一号
    <input type="radio"
           v-model="tab"
           value="myCom2">组件二号
    <!--等号左边是子组件，右边是父组件，因此tab是父组件的data，通过改变来切换组件-->
    <!-- Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡 -->
    <!-- 同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了 过渡模式
        ① in-out：新元素先进行过渡，完成之后当前元素过渡离开。② out-in：当前元素先进行过渡，完成之后新元素过渡进入 -->
    <transition mode="out-in">
      <component :is="tab"></component>
    </transition>
  </div>
</template>
<script>
import myCom1 from '../components/component-demo'
import myCom2 from '../components/component-demo copy'
export default {
  // el: '#app',
  data () {
    return {
      tab: 'myCom1'
    }
  },
  components: {
    myCom1,
    myCom2
  },
  methods: {
    toggleView (view) {
      this.tab = view
    }
  }
}
</script>
<style scoped>
.tabs {
  margin: 0;
  padding: 0;
  list-style: none;
}
.per-tab {
  display: inline-block;
  width: 120px;
  line-height: 32px;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.per-tab:last-child {
  border-right: 1px solid #ccc;
}
.tab-content {
  height: 240px;
  border: 1px solid #ccc;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
