<template>
  <div>
    <h1>The User Page</h1>
    <p>Loaded ID: {{id}}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
  export default {
    // data() { // can be nicely replaced with computed: {}
    //   return {
    //     id: this.$route.params.id
    //   };
    // },
    // watch: {
    //   '$route'(to, from) {
    //     this.id = to.params.id;
    //   }
    // },
    // computed: {
    //   id: function() {
    //     return this.$route.params.id;
    //   }
    // },
    props: { 
      id: {} 
    },
    methods: {
      navigateToHome() {
        this.$router.push('/');
      }
    }
  }
</script>