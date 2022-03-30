<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col-8 offset-2">
                
                    <AlbumCard/>
                
            </div>
        </div>
    </main>
</template>

<script>
import AlbumCard from './card.vue'

export default {
    name:"IndexMain",
    components: {
        AlbumCard,
    }
}
</script>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 65px);
        background-color: #1e2d3b;
    }
</style>