<template>
  <div id="app">
    <IndexHeader
    :genreArray = genreNoDuplicate
    />
    <IndexMain @getAlbum="updateAlbum"/>
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
      albumList: null,
      genreList:[],
      genreNoDuplicate:[],
      
    }
  },
  created: function(){
    
  },
  computed:{
    
  },
  
  methods:{
    updateAlbum(albums){
      this.albumList = albums;
      /* il codice sottostante crea un array con i generi musicali senza duplicati */
      this.albumList.forEach(element => {
        this.genreList.push(element.genre)
      });
      this.genreNoDuplicate=[...new Set(this.genreList)]
      /* console.log(this.genreList);
      console.warn(this.genreNoDuplicate) */

    },
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
