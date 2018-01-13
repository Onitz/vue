<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers
        @selectServer="selectedServer = $event"> 
      </servers>
      <app-server-details
        :id="selectedServer.id"
        :status="selectedServer.status"
        @updateServer="upd">
      </app-server-details>
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
        selectedServer: {id: 1, status: 'filler'}
      }
    },
    methods: {
      upd(serv) {
        //alert(Servers.servers);
        //Servers.methods.updateServer(serv.id-1, serv)
        //console.log(serv.id-1);
        this.selectedServer = serv;
      }
    },
    components: {
      appHeader: Header,
      Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
