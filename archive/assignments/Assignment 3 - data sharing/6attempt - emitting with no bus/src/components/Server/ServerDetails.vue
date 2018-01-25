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
  /* for eventBus
    data: function() {
      return {
        server: null
      };
    }
    ,
    created() { // Move handler to child: ServerDetials
      this.$on('selectServer', (s) => {
        this.server = s;
        console.log('selected' + s.id);
      });
    }*/
  }
</script>