<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" @click="selectServer(server)">
        {{server.id+' '+server.status}}
      </li>
    </ul>
  </div>
</template>

<script>
  // main.js has named export:
  // export const eventBus = new Vue();
  import { eventBus } from '../../main.js';
  export default { 
    data: function() {
      return {
        servers: [
          { id: 1, status: 'normal'   },
          { id: 2, status: 'critical' },
          { id: 3, status: 'unkown'   },
          { id: 4, status: 'normal'   },
        ]
      };
    },
    methods: { // Move emitter to child: Server
      selectServer(serv) {
        eventBus.$emit('selectServer', serv);
      }
    },
    created() { // Move handler to child: ServerDetials
      console.log('eb'+eventBus);
      eventBus.$on('selectServer', (s) => {
        console.log('selected' + s.id);
      });
    }
  }
</script>
