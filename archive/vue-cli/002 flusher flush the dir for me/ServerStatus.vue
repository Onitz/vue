<template>
  <div>
    <p>Server status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
    <hr>
  </div>
</template>

<script>
  export default {
    data: () => ({
      status: 'Critical'
    }),
    methods: {
      changeStatus() {
        this.status = 'Normal';
      }
    }
  }
</script>