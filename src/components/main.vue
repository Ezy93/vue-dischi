<template>
    <main class="container-fluid">
        <div class="row pt-5">
            <div class="col-8 offset-2 d-flex flex-wrap">
                
                    <AlbumCard 
                    v-for="(element,index) in albumInfo" 
                    :key="index"
                    :album="element"
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
                console.log(result.data.response);
                this.albumInfo = result.data.response 
                console.log(this.albumInfo) 
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