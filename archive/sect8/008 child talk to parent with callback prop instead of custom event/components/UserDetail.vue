<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">ResetName</button>
  </div>
</template>

<script>
  export default {
    props: {
      myName: {
        type: String
      },
      resetFn: Function
    },
    methods: {
      switchName() {
        return this.myName.split('').reverse().join('');
      },
      resetName() {
        this.myName = 'Dabson';
        this.$emit('nameWasReset', this.myName);
      }
    }
  }
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
