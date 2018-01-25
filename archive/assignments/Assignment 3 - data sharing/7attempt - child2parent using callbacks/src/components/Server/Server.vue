<template>
  <li class="list-group-item" @click="selectServer(server)">
    s{{server.id+' '+server.status}}
  </li>
</template>

<script>
  export default {
    props: ['server','selectServer']
  }
</script>