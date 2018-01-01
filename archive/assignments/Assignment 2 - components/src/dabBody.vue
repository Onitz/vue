<template>
  <div class="row">
      <dabServerStatus></dabServerStatus>
      <dabServerDetails></dabServerDetails>
  </div>
</template>

<script>
    import dabServerStatus from './dabServerStatus.vue'
    import dabServerDetails from './dabServerDetails.vue'

    export default {
        components: {
            dabServerStatus,
            dabServerDetails
        }
    }
</script>