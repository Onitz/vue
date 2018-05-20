<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username"/>
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email"/>
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {}
      };
    },
    methods: {
      submit() {
        // this.$http.post( 'data.json', this.user )
        //   .then(response => {
        //     console.log(response);
        //   }, error => {
        //     console.log('Error: ' + error );
        //   });

        //first arg is params, 2nd arg is input data
        //this.resource.save({}, this.user);
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        this.$http.get( 'data.json' )
          .then(response => {
            const data = response.json();
            return data;
          })
          .then(data => {
            // console.log( data ); //now transform data into array
            const resultArray = [];
            for( let key in data ) {
              resultArray.push( data[key] );
            }
            this.users = resultArray;
          });
      }
    },
    created() {
      // customActions is a custom resource. call using this.resource.saveAlt(this.user)
      const customActions = {
        saveAlt: {
          method: 'POST',
          url: 'alternative.json'
        }
      }
      this.resource = this.$resource('data.json', {}, customActions); //2nd arg is variable data into url
    }
  }
</script>

<style>
</style>
