import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter ({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition; // if user hits back & forward, browser stores position of last page :)
    }
    if(to.hash) {
      return {
        selector: to.hash
      };
    }
    return {x: 0, y: 200};
  }
});

//execute this before each routing action, next() is default route behavior
router.beforeEach((to,from,next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
