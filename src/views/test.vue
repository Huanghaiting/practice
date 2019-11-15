
<template>
  <div>
    <div @click="test()">按钮</div>
    <div>{{ basicInfo }}</div>
  </div>
  <!-- <h1>{{resNum.name}}</h1> -->

</template>
<script>

export default {
  data () {
    return {
      combo: 'qqqq',
      basicInfo: ''
    }
  },
  methods: {
    test () {
      this.$axios.get('/api/home')
        .then(response => {
          let dataFrom = response.data
          this.basicInfo = dataFrom.name
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
    // this指向问题
    // var that = this
    // this.$axios.get('/api/home')
    //   .then(function (response) {
    //     let dataFrom = response.data
    //     that.basicInfo = dataFrom.name
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error)
    //   })
    // }
  },
  mounted () {
  }

}
</script>
