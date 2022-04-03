<template>
    <div class="my-container-card mt-1"  v-if="(album.genre == selValue)||(selValue == 'All')">
        <div class="my-card p-4 mx-3">
            <div class="my-album-image">
                <img :src="album.poster" alt="asdasdas" class="img-fluid">
            </div>

            <div class=" h-50">
                <h6 class="text-white fw-bold pt-3">{{album.title}}</h6>
                <div class="my-album-description pt-3 pb-4 fw-bold">
                    <p class="mb-0">{{album.author}}</p>
                    <p class="mb-0">{{album.year}}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlbumCard",
    props:{
        'album': Object,
        'selValue': String
        },
}
</script>

<style lang="scss" scoped>
    
    div.my-container-card{
        width: calc(100% / 5);
        
        div.my-card{
            background-color: #2e3a46;
            height: 100%;
            div.h-50{
                div.my-album-description{
                    color: #737b7e; /* e lo stesso colore dell'header creare una variabile */
                    font-size: .8rem;

                }
            }
        }
    }
    

</style>