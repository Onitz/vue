<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server 
         v-for="server in servers" 
         :server="server"
         @selectServer="handleSelect"></Server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue';

  export default {
    components: {
      Server
    },
    data: function() {
      return {
        servers: [
          { id: 1, status: 'Normal'   },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Unkown'   },
          { id: 4, status: 'Normal'   },
        ]
      };
    },
    methods: {
      handleSelect(serv) {
        console.log('GOT IT!');
        this.$emit('serversSelect', serv);
      }
    }
  }
</script>
