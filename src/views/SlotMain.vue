<template>
  <div>
    <com>
      <!--如果不是用插槽组件中间写的东西是不会显示的-->
      <h1 slot="first"> 我对应first插槽</h1>
      <p slot="second"> 我对应second插槽</p>
      <h1 slot="third"> 我对应third插槽</h1>
      <h1> 我对应没有name 的插槽</h1>
      <!-- <h1> 我是默认插槽</h1> -->
    </com>
    <div>slot-scope 作用域插槽</div>
    <!--接受父组件传来的todos数据-->
    <com :todos="todos">
      <!--定义一个获取循环行信息的使用参数slotProps-->
      <!-- 只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法 -->
      <template v-slot:four="slotDemo">
        <!--定义一个获取循环行信息的使用参数todos是我们在子组件定义的插槽返回信息的数据-->
        <span v-if="slotDemo.todos.isComplete">✓</span>
        <span>{{slotDemo.todos.text}}</span>
      </template>
    </com>
  </div>
</template>
<script>
import com from '../components/slot'
export default {
  components: { com },
  data () {
    return {
      todos: [
        {
          id: 0,
          text: 'ziwei0',
          isComplete: false
        },
        {
          text: 'ziwei1',
          id: 1,
          isComplete: true
        },
        {
          text: 'ziwei2',
          id: 2,
          isComplete: false
        },
        {
          text: 'ziwei3',
          id: 3,
          isComplete: false
        }
      ]
    }
  }
}
</script>
