<template>
  <div>
    <div>
      <div>Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡:</div>
      <div>条件渲染 (使用 v-if)</div>
      <div>条件展示 (使用 v-show)</div>
      <div> 动态组件</div>
      <div>组件根节点</div>
    </div>
    <button @click="isHidden=!isHidden">
      {{isHidden?'显示':'隐藏'}}
    </button>
    <transition>
      <p v-if="!isHidden">使用默认前缀过渡</p>
    </transition>
    <transition name="transitionName">
      <p v-if="!isHidden">使用rotate前缀过渡</p>
      <div class="inline-block"
           v-if="!isHidden">自定义动画</div>
    </transition>
    <transition name="compare">
      <div class="inline-block"
           v-if="!isHidden">自定义动画</div>
    </transition>
    <transition name="custom"
                enter-active-class="animated rotateIn "
                leave-active-class="animated rotateOut ">
      <div class="inline-block"
           v-if="!isHidden">animate.css动画</div>
    </transition>
    <h1 class="animated infinite bounce delay-2s ">Example</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isHidden: true,
      transitionName: 'rotate'
    }
  }
}
</script>
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition-property: opacity;
  transition-duration: 900ms;
  transition-delay: 100ms;
  transition-timing-function: linear;
}
.rotate-enter,
.rotate-leave-to {
  transform: rotateY(90deg);
}
.rotate-enter-active,
.rotate-leave-active {
  transform-origin: left;
  transition: transform 1s linear;
}
.inline-block {
  display: inline-block;
}
.compare-enter-active {
  animation: selfRotateIn 1s;
}
.compare-leave-active {
  animation: selfRotateOut 1s;
}
@keyframes selfRotateIn {
  0% {
    opacity: 0;
    transform: rotateZ(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}
@keyframes selfRotateOut {
  0% {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  100% {
    opacity: 0;
    transform: rotateZ(-90deg);
  }
}
</style>
