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
import { fruitMixin } from './fruitMixin.js';
export default {
  mixins: [fruitMixin]
}
</script>

<style>
</style>
