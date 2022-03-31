<template>
  <div id="app">
    <IndexHeader/>
    <IndexMain/>
  </div>
</template>

<script>
import IndexHeader from './components/header.vue'
import IndexMain from './components/main.vue'

export default {
  name: 'App',
  components: {
    IndexHeader,
    IndexMain,
  },
  data: function(){
    return{
      
    }
  },
  created: function(){
    
  },
  methods:{
    
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
