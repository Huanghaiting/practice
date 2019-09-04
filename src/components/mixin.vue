<template>
  <div>
    <h1>{{title}}</h1>
    <p><strong class="label">Text:</strong>{{text}}</p>
    <p><strong class="label">Plus Text:</strong>{{plusText}}</p>
    <p><strong class="label">Upper Text:</strong>{{text|supplyUpper}}</p>
    <button @click="toggleText">切换文本</button>
  </div>
</template>
<script>
// 第一个混入demo
let mixin = {
  data () {
    return {
      title: 'Test for mixin'
    }
  },
  mounted () {
    console.log('混入 mounted')
  },
  methods: {
    toggleText () {
      this.text = '混入 text'
    }
  },
  // computed/filter 选项合并到组件中
  computed: {
    plusText () {
      return '+ ' + this.text + ' +'
    }
  },
  filters: {
    supplyUpper: value => value.toUpperCase()
  },
  watch: {
    text (value) {
      console.log('混入watch text:' + value)
    }
  }
}
// 第二个混入demo
// let mixin2 = {
//   data () {
//     return {
//       title: 'Test for mixin2'
//     }
//   },
//   mounted () {
//     console.log('混入 mounted2')
//   },
//   methods: {
//     toggleText () {
//       this.text = '混入 text2'
//     }
//   },
//   computed: {
//     plusText () {
//       return '+33 ' + this.text + ' +'
//     }
//   },
//   filters: {
//     supplyUpper: value => value.slice(0, 3)
//   },
//   watch: {
//     text (value) {
//       console.log('混入 text2:' + value)
//     }
//   }
// }
export default {
  // 这里顺序也有影响
  // mixin2
  mixins: [mixin],
  // 在处理data选项冲突时，Vue 选用了组件的数据。
  data () {
    return {
      title: 'A Title',
      text: 'which ones?'
    }
  },
  // 在处理mounted钩子函数时，先行调用mixin的钩子函数，即先调用mixin，mixin2的mounted钩子函数
  mounted () {
    console.log('实例 mounted')
  },
  methods: {
    toggleText () {
      this.text = '实例3instance text'
    }
  },
  // 在处理watch方法时，先行调用mixin的钩子函数，即先调用mixin，mixin2的watch 方法
  watch: {
    text (value) {
      console.log('实例watch instance text3:' + value)
    }
  }
}
</script>
<style scoped>
.label {
  display: inline-block;
  min-width: 160px;
}
</style>
