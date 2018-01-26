import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight'); //v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})
