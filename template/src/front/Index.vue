<template>
    <div class="index">
        <hello-plugin/>
    </div>
</template>

<script>
    import HelloPlugin from "./components/HelloPlugin"

    export default {
        name: "Index",
        components: {
            HelloPlugin
        }
    }
</script>

<style scoped>
    .index {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
