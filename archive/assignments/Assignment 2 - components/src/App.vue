<template>
    <div class="container">
        <dabHeader></dabHeader>
        <hr>
        <dabBody></dabBody>
        <hr>
        <dabFooter></dabFooter>
    </div>
</template>

<script>
    import dabServerStatus from './dabServerStatus.vue'
    import dabServerDetails from './dabServerDetails.vue'
    import dabHeader from './dabHeader.vue'
    import dabFooter from './dabFooter.vue'
    import dabServer from './dabServer.vue'
    import dabBody from './dabBody.vue'

    export default {
        components: {
            dabHeader,
            dabFooter,
            dabBody
        }
    }
</script>

<style>

</style>
