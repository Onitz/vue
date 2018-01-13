<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item"
          v-for="(s, index) in servers"
          @click="selectServer(s)">
        Server #{{ s.id }} {{ s.status }} {{ index + 1 }}
        <button @click="s.status='Normal'">N</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
        ]
      }
    }, 
    methods: {
      updateServer(index, newServer) {
        servers[index] = newServer
        // alert(servers);
      },
      selectServer(server) {
        this.$emit('selectServer', server);
      }
    }
  }
</script>

<style>

</style>
