// 渲染函数例子
<script>
// props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
export default {
  // 定义组件的名字
  name: 'fly-table',
  props: {
    fields: {
      // type可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。
      type: Array,
      // default为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。
      default: function () {
        return []
      }
    },
    goods: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return []
      }
    }
  },
  methods: {
    reverse () {
      // reverse() 方法用于颠倒数组中元素的顺序,该方法会改变原来的数组，而不会创建新的数组。
      this.goods.reverse()
    }
  },
  render (createElement) {
    return createElement('div', {
      slot: 'fly-table'
      // createElement('h2', this.$slots.title),
    }, [createElement('button', {
      // 用于绑定类名
      class: ['btn', 'btn-text'],
      // 用于绑定节点的一般属性
      attrs: {
        disabled: false,
        title: '点击使数组倒序'
      },
      // 用于绑节点dom属性，如innerHTML、innerText
      domProps: {
        innerText: '倒序'
      },
      // 按钮绑定点击事件的方法
      on: {
        click: () => {
          this.goods.reverse()
        }
      },
      // 自定义指令
      directives: [],
      // 其他属性
      key: 'btnReverse',
      ref: 'btnReverse'
    }),
    createElement('table', {
      style: {
        width: '400px',
        textAlign: 'left',
        lineHeight: '42px',
        border: '1px solid #eee',
        userSelect: 'none',
        margin: '0 auto'
      }
    }, [createElement('tr', [
      this.fields.map(field => createElement('th', field.prop))
    ]),
    this.goods.map(item => createElement('tr', {
      style: {
        color: item.isMarked ? '#ea4335' : ''
      }
    }, this.fields.map(field => createElement('td', {
      style: {
        borderTop: '1px solid #eee'
      }
    }, [field.prop !== 'operate' ? createElement('span', item[field.prop]) : createElement('button',
      {
        class: ['btn', 'btn-text'],
        domProps: {
          innerHTML: '<span>切换标记</span>'
        },
        on: {
          click: () => {
            item.isMarked = !item.isMarked
          }
        }
      })]))
    ))]
    )]
    )
  }

}
</script>
