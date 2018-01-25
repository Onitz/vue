import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: function() {
    return {
      selectedServer: null,
      servers: [
        { id: 1, status: 'Normal'},
        { id: 2, status: 'Critical'},
        { id: 3, status: 'Unknown'},
        { id: 4, status: 'Normal'}
      ]
    };
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
