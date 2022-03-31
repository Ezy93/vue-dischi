<template>
    <nav class="navbar">
        <div class="ms-3 py-2 d-flex">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/spotify-logo.png" alt="" >
            </a>
        </div>
        <div class="my-select-container d-flex">
            <h3 class="text-white me-4">Seleziona un genere musicale:</h3>
            <select class="my-2 me-3" name="musicgenre" id="">
                    <option v-for="(element,index) in genreArray" :key="index" :value="element.genre">{{element}}</option>
            </select>

        </div>
    </nav>
</template>

<script>

export default {
    name: "IndexHeader",
    props:{'genreArray': Array},
    data: function(){
        return{
            
        }
    },

    computed:{
        
        
    },
}
</script>

<style lang="scss" scoped>

    nav{
        background-color: #2e3a46 ;

        div.py-2{

            a.navbar-brand{
                
                img{
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }

</style>