<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">No Server Selected</p>
    <p v-else>
      Server{{server.id}}, Status: {{server.status}}<br><br>
      <button @click="server.status='Normal'">Normalise</button>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['server']
  }
</script>