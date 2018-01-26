<template>
  <div>
    <!--
    i am full name
    <input :value="fullName" @input="updateName" ref="fn" class="form-control">
    -->
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input id="firstName" :value="firstName" class="form-control" @input="updateFirstName">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input id="lastName" :value="lastName" class="form-control" @input="updateLastName">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateFirstName(e) {
      this.$emit('input', e.target.value + ' ' + this.lastName);
    },
    updateLastName(e) {
      this.$emit('input', this.firstName + ' ' + e.target.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
}
</script>

<style>
</style>