<template>
    <div class="py-5">
        <div class="my-card p-4">
            <div class="my-album-image ">
                <img :src="album.poster" alt="asdasdas" class="img-fluid">
            </div>

            <div class="px-4">
                <h5 class="text-white fw-bold pt-3">{{album.title}}</h5>
                <div class="my-album-description pt-3 pb-4">
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
    props:{'album': Object},
}
</script>

<style lang="scss" scoped>
    
    div.py-5{
        width: calc(100% / 5);
        div.my-card{
            background-color: #2e3a46;
            div.px-4{
                div.my-album-description{
                    color: #737b7e; /* e lo stesso colore dell'header creare una variabile */
                }
            }
        }
    }
    

</style>