<template>
  <div>
    <h1>Filters &amp; Mixins</h1>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  computed: {
    filteredFruits() { //this is a good alternative to a filter
      return this.fruits.filter(element=>{
        return element.match(this.filterText); //parsing a raw regex here, ok?
      });
    }
  }
}
</script>

<style>
</style>
