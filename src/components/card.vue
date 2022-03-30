<template>
    <div>
        <div class="my-card">
            <div class="my-album-image p-4">
                <img src="../assets/img/metallica.jpg" alt="asdasdas" class="img-fluid">
            </div>

            <div class="px-4">
                <h5 class="text-white fw-bold">AND JUSTICE FOR ALL</h5>
                <div class="my-album-description pt-3 pb-5">
                    <p class="mb-0">Metallica</p>
                    <p class="mb-0">1988</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlbumCard",
}
</script>

<style lang="scss" scoped>
    

            div.my-card{
                width: calc(100% / 5);
                background-color: #2e3a46;
                div.px-4{
                    div.my-album-description{
                        color: #737b7e;
                    }
                }
            }
    

</style>