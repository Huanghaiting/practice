// 过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。(被用于一些常见的文本格式化)
 <!-- 在双花括号中 -->
 {{ message | capitalize }}
<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>

<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{title|supplyTitle1}}</h1>
    <!-- 多个filter 时，从左向右执行过滤 -->
    <h1>{{title|supplyTitle1|supplyTitle2}}</h1>
  </div>
</template>
<script>
export default {
  name: 'filters-demo',
  data () {
    return {
      title: 'Test#%for#%filter'
    }
  },
  filters: {
    supplyTitle1 (value) {
      console.log('supply title 1')
      return value.replace(/#/g, ' ')
    },
    supplyTitle2 (value) {
      console.log('supply title 2')
      return value.replace(/%/g, ' ')
    }
  }
}
</script>
