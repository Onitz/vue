<template>
  <div>
    i am full name
    <input :value="fullName" @input="updateName" ref="fn">
  </div>
</template>

<script>
export default {
  props: ['fullName'],
  methods: {
    updateName(v) {
      console.log(v);
      console.log(this.$refs.fn)
      this.$emit('input', this.$refs.fn.value);
    }
  }
}
</script>

<style>
</style>