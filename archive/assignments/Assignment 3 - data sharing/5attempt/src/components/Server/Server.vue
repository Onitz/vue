<template>
  <li class="list-group-item" @click="selectServer(server)">
    s{{server.id+' '+server.status}}
  </li>
</template>

<script>
  import { eventBus } from '../../main.js';
  export default {
    props: ['server'],
    methods: { // Move emitter to child: Server
      selectServer(serv) {
        console.log('sel',serv.id);
        eventBus.$emit('selectServer', serv);
      }
    }
  }
</script>