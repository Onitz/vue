<template>
  <div class="container">
    <form class="form-group">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!--<label for="fullName">Full Name:</label><input id="fullName" v-model="fullName"><br>-->
          <label for="mail">Mail:</label><input id="mail" v-model="mail"><br>
          <label for="password">password:</label><input id="password" v-model="password" type="password"><br>

          <b>Store Data: </b>
          <label for="sdy"><input id="sdy" type="radio" v-model="storeData" value="Yes">Yes</label>
          <label for="sdn"><input id="sdn" type="radio" v-model="storeData" value="No">No</label>
      
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <button @click.prevent="handleSubmit">Submit</button>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <full-name v-model="fullName"></full-name>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ mail }} </p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullName from './fullName.vue';
export default {
  components: {
    FullName
  },
  data() {
    return {
      fullName: 'xxx',
      mail: 'a@a.a',
      password: 'pass',
      storeData: 'Yes',
      isSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
    }
  }
}
</script>

<style>
</style>
