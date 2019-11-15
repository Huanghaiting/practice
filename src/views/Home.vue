<template>
  <div class="home">
    <!-- <img alt="Vue logo"
         src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>渲染函数</div>
    <fly-table :fields="fields"
               :goods="goods"></fly-table>
    <div>过滤器</div>
    <fields-demo></fields-demo>
    <div>自定义指令</div>
    <v-name></v-name>
    <div>mixins混入的使用</div>
    <mixin-demo></mixin-demo>
    <div>vuex状态管理</div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>{{tenTimesCount}}</p>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
// import Vue from 'vue'
// Vue.component('fly-table', {
//   props: {
//     fields: {
//       type: Array,
//       default: function () {
//         return []
//       }
//     },
//     goods: {
//       type: Array,
//       // 对象或数组默认值必须从一个工厂函数获取
//       default: function () {
//         return []
//       }
//     }
//   },
//   methods: {
//     reverse () {
//       this.goods.reverse()
//     }
//   },
//   render (createElement) {
//     return createElement('div', {
//       slot: 'fly-table'
//     }, [createElement('h2', this.$slots.title), createElement('button', {
//       class: ['btn', 'btn-text'],
//       attrs: {
//         disabled: false,
//         title: '点击使数组倒序'
//       },
//       domProps: {
//         innerText: '倒序'
//       },
//       on: {
//         click: () => {
//           this.goods.reverse()
//         }
//       },
//       directives: [],
//       key: 'btnReverse',
//       ref: 'btnReverse'
//     }),
//     createElement('table', {
//       style: {
//         width: '400px',
//         textAlign: 'left',
//         lineHeight: '42px',
//         border: '1px solid #eee',
//         userSelect: 'none'
//       }
//     }, [createElement('tr', [
//       this.fields.map(field => createElement('th', field.prop))
//     ]),
//     this.goods.map(item => createElement('tr', {
//       style: {
//         color: item.isMarked ? '#ea4335' : ''
//       }
//     }, this.fields.map(field => createElement('td', {
//       style: {
//         borderTop: '1px solid #eee'
//       }
//     }, [field.prop !== 'operate' ? createElement('span', item[field.prop]) : createElement('button',
//       {
//         class: ['btn', 'btn-text'],
//         domProps: {
//           innerHTML: '<span>切换标记</span>'
//         },
//         on: {
//           click: () => {
//             item.isMarked = !item.isMarked
//           }
//         }
//       })]))
//     ))]
//     )]
//     )
//   }

// })
// @ is an alias to /src
import { mapGetters } from 'vuex'
import FlyTable from '@/components/Render.vue'
import FieldsDemo from '@/components/filters.vue'
import VName from '@/components/v-name.vue'
import MixinDemo from '@/components/mixin.vue'
// import ActiveCom from '@/components/DynamicComponent.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    FlyTable,
    'fields-demo': FieldsDemo,
    'v-name': VName,
    MixinDemo
    // ActiveCom
  },
  data () {
    return {
      newRouter: null,
      fields: [
        {
          label: '名称',
          prop: 'name'
        },
        {
          label: '数量',
          prop: 'quantity'
        },
        {
          label: '价格',
          prop: 'price'
        },
        {
          label: '',
          prop: 'operate'
        }
      ],
      goods: [
        {
          name: '苹果',
          quantity: 200,
          price: 6.8,
          isMarked: false
        },
        {
          name: '西瓜',
          quantity: 500,
          price: 4.8,
          isMarked: false
        },
        {
          name: '榴莲',
          quantity: 0,
          price: 22.8,
          isMarked: false
        }
      ]
    }
  },
  watch: {
    newRouter (value) {
      console.log(value)
    }
  },
  // 由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。
  // 每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapGetters(['tenTimesCount'])
  },
  methods: {

    increment () {
      // 可以通过 store.state 来获取状态对象
      console.log(this.$store.state.count)
      // 通过 store.commit 方法触发状态变更
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  mounted () {
    this.newRouter = this.$route.path
  }

}
</script>

<style scoped>
.btn {
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 12px;
}
.btn-text {
  color: #409eff;
  background-color: transparent;
}
.btn-text:hover {
  color: #66b1ff;
}
</style>
