<template id="com">
  <div>
    {{msg}}
    <!--  1.插槽有两种一种是用name命名，然后添加的插槽进入指定的预留位置 -->
    <slot name="first"></slot>
    <slot name="second"></slot>
    <slot name="third"></slot>
    <!--  2.另一种是<slot>没有name，那么不管添加的什么标签都会进入这个slot中 -->
    <!-- <slot name="default"></slot> === <slot></slot> -->
    <slot></slot>
    <div>
      <ul>
        <li v-for="todo in todos"
            :key="todo.id">
          <!-- 给插槽绑定一个属性，属性名叫todoItem ,值是todo-->
          <slot name="four"
                :todoItem="todo">
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'com',
  props: ['todos'],
  data () {
    return {
      msg: '今天天气真好！'
    }
  }
}
</script>
// 1.插槽作用 就是由于插件又可以能外部人员需要添加一些自定的代码，但由于组件标签之中 是无法插入内容的因此有了插槽，简单的说就是提供预留项
// 2. 解释一下什么叫组件中间插入不进标签：
    '<com><div>在com组件中我是不可以直接插入的</div> </com>'
