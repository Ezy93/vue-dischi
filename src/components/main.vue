<template>
    <main>
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
    
</style>