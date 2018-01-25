<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!selectedServer">No server selected</p>
    <p v-else>
      Server{{selectedServer.id}}, 
      Status:{{selectedServer.status}}
    </p>
    <button @click="normalise(selectedServer)">Normal me</button>
  </div>
</template>

<script>
  export default {
    methods: {
      normalise(serv) {
        serv.status='Normal';
      }
    },
    props: ['selectedServer']
  }
</script>

<style>
</style>
