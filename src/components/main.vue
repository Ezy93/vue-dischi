<template>
    <main class="container-fluid">
        <div class="row pt-3">
            <div class="col-8 offset-2 d-flex flex-wrap">
                
                    <AlbumCard
                    
                    v-for="(element,index) in albumInfo" 
                    :key="index"
                    :album="element"
                    :selValue="value"
                    />
                
                
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
import AlbumCard from './card.vue'

export default {
    name:"IndexMain",
    components: {
        AlbumCard,
    },
    props:{'value': String},
    
    data: function(){
        return{
            albumInfo : null,
        }

    },
    created: function(){
        this.getAlbumList()
    },
    methods:{
        getAlbumList(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result)=>{
                
                this.albumInfo = result.data.response
                this.$emit('getAlbum', this.albumInfo)
                
            })
            .catch((error) =>{
                console.log(error)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    main{
        overflow: hidden;
        height: calc(100vh - 64px);
        background-color: #1e2d3b;
    }
</style>