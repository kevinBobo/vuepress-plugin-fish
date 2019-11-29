<template>
    <div id="jsi-flying-fish-container" class="container"></div>
</template>

<script>
    import RENDERER from "./fish"
    export default {
        name: 'Fish',
        mounted () {
            RENDERER.init()
        }
    }
</script>

<style>
    @media only screen and (max-width: 767px){
        #sidebar_search_box input[type=text]{width:calc(100% - 24px)}
    }
</style>