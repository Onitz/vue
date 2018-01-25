<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li 
        v-for="server in eventData.servers" 
        class="list-group-item"
        @click="eventData.selectedServer=server">
        Server#{{server.id}} :: {{server.status}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js';
  export default {
    computed: {
      eventData() {
        return eventBus.$data
      }
    }
  }
</script>

<style>

</style>
