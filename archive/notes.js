//vuejs Start 6:11

new Vue({ el:'', data{}, methods{} });
  * Arguments are passed to directives(v-on) via a colon, ie vue-on:input="myMethod"
        this.title = event.target.value;

Course Structure:
   1. Getting Started 
   2. Interacting with the DOM (Templates)
   3. Understanding the VueJS Instance 
   4. Vue CLI 
   5. Components 
   6. Forms 
   7. Directives, filteres & mixins 
   8. Animations & transitions 
   9. WORKING WITH HTTP 
  10. Bigger/single page applications: Routing
  11. State Management
  12. Deployment
  13. Four projects: basics, tempate interaction, components, animations, final project inc routing state managment 
  (Source code attached to each video), exercises, Q&A

Vue instance + template(html)
By instanciating this instance, you

Vuejs does not use htmlcode at runtime. 
  It creates a template based on htmlcode, 
  stores internally, 
  then renders real html code to the DOM
There is this VueJs layer instance in the middle
{{ /*you can execute functions and eval expressions here */ }}
<p>{{ sayHello() }}</p>

^in the template, we have access to everything stored in:
  data
  methods
  (because vuejs proxies them for us)
  we can call this. anywhere in our Vue Instance object
  to get access to any of our vue properties

{{brace notation does not work in attributes!}}
v-DIRECTIVE
  <a v-bind:href="link">link to Dabson</a>

