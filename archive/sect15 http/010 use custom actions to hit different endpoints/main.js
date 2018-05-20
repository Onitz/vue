import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-10a81.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);

  if( request.method == 'POST') {
    request.method = 'PUT';
  }

  next(response => {
    response.json = () => {
      return {messages: response.body}; // we're wrapping it in a second object to keep loop working
    }; //careful, this will affect all requests
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
