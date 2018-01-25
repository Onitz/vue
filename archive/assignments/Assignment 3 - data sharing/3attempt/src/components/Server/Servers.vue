<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li 
        v-for="server in servers" 
        class="list-group-item"
        @click="selectServer(server)">
        Server#{{server.id}} :: {{server.status}}
      </li>
    </ul>
    <Server>x</Server>
    
  </div>
</template>

<script>
  // import Server from './Server.vue';
  import Server from './Server.vue'
  import { eventBus } from '../../main.js';

  export default {
    components: {
      Server
    },
    computed: {
      servers() {
        return eventBus.$data.servers;
      }
    },
    methods: {
      selectServer(serv) {
        eventBus.$data.selectedServer = serv;
        //eventBus.$emit('selectServer', serv);
        //console.log('sel');
        //console.log(serv.id);
      }
    },
  }
</script>

<style>

</style>
