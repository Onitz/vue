<template>
  <li class="list-group-item" @click="selectServer(server)">
    s{{server.id+' '+server.status}}
  </li>
</template>

<script>
  export default {
    props: ['server'],
    methods: { // Move emitter to child: Server
      selectServer(serv) {
        console.log('sel',serv.id);
        this.$emit('selectServer', serv);
      }
    },
    created() { // Move handler to child: ServerDetials
      this.$on('selectServer', (s) => {
        console.log('selectServer emission dectected in Server');
      });
    }
  }
</script>