<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers @serversSelect="appHandleSelect"></servers>
      <app-server-details :server="selectedServer"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
    data: function() {
      return {
        selectedServer: null
      };
    },
    components: {
      appHeader: Header,
      Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    },
    methods: {
      appHandleSelect(serv) {
        this.selectedServer = serv;
      }
    }
  }
</script>

<style>

</style>
