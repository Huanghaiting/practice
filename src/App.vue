<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span @click="add">
        <!-- 动态路由 -->
        <!-- <router-link :to="'/about/'+num">About</router-link> -->
        <!-- 嵌套路由 -->
        <router-link to="/about">About</router-link>
        <ul>
          <li>
            <router-link to="/about/author">About-author</router-link>
          </li>
          <li>
            <router-link to="/about/email">About-email</router-link>
          </li>
        </ul>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
    }
  }
}
</script>
<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
