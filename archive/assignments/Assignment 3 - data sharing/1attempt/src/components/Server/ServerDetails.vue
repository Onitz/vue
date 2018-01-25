<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <p>Id: {{ id }}</p>
    <p>Status: {{ status }}</p>
    <button @click="normalizeServer">Normalize server (failed to update other child)</button>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      status: String
    },
    methods: {
      normalizeServer() {
        this.$emit('updateServer', {id:this.id,status:'Normal'});
      }
    }
  };
</script>

<style>

</style>
