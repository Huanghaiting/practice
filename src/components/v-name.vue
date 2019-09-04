// 自定义指令
<template>
  <div>
    <h1 v-some.upper>{{title}}</h1>
    <h1 v-some.lower>{{title}}</h1>
    <h1 v-style="style">{{title}}</h1>
    <button @click="handleStyle">修改v-style</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Test for Directive',
      style: {
        fontStyle: 'italic'
      }
    }
  },
  methods: {
    handleStyle () {
      this.$set(this.style, 'color', '#ababab')
      this.$set(this.style, 'transform', 'rotateX(45eg)')
    }
  },
  directives: {
    style: {
      bind (el, binding, vnode) {
        console.log('%c---------bind参数：el,binding,vnode----------------', 'font-size:18px;')
        console.log('%o%oooooo\n%o', el, binding, vnode)
        let styles = binding.value // 获取指令绑定的值
        Object.keys(styles).forEach(key => { el.style[key] = styles[key] })
      },
      update (el, binding, vnode, oldVnode) {
        console.log('%c---------bind参数：el,binding,vnode,oldVnode----------------', 'font-size:18px;')
        console.log('%o%oooooo\n%o', el, binding, vnode, oldVnode)
        let styles = binding.value // 获取指令绑定的值
        // forEach用于调用数组的每个元素，并将元素传递给回调函数
        Object.keys(styles).forEach(function (key) { el.style[key] = styles[key] })
      }
    },
    some (el, binding) {
      let text = el.innerText
      // modifiers 修饰符
      let modifiers = binding.modifiers
      if (modifiers.upper) {
        el.innerText = text.toUpperCase()
      }
      if (modifiers.lower) {
        el.innerText = text.toLowerCase()
      }
    }
  }
}
</script>
