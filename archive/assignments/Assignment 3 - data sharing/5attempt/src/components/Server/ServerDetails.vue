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
  import { eventBus } from '../../main.js';
  export default {
    data: function() {
      return {
        server: null
      };
    },
    created() { // Move handler to child: ServerDetials
      console.log('xxxxx');
      console.log(this.server);
      eventBus.$on('selectServer', (s) => {
        this.server = s;
        console.log('selected' + s.id);
      });
    }
  }
</script>