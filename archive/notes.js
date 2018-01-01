vuejs.org/api

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
  permits binding dynamic data to html attributes

MUST DO DOUBLE QUOTES IN git commit -m "commit message"
{{ braceNotation }} is parsed as text

v-html="finishedLink" tells vue to parse data.finishedLin as html
      finishedLink: '<a href="https://dabson.co">Dbs</a>'

v-bind: binds model data -> html template 
v-on:   binds template event -> model data

    [[ this is the 2-way data binding ]]
file:///F:/Dropbox/projects/vue/index.html

                <v-on:click="increase(2, $event)">Click me</button>

                methods{
                  updateCoords: function(event) {
                    this.x = event.clientX;
                    this.y = event.clientY;
                  },
                  increase: function(step) {
                    this.countr += step;
                  }
                }

$event lets y ou manually pass in the event object to multi-input functions
<span v-on:mousemove.stop="">DEAD SPOT</span>
v-on:mousemove.stop.propegate

v-on:keyup.stop 

'.stop' is the event modifier

<input v-on:keyup.enter="submit">
<input @keyup.enter="submit">

.enter 
.tab 
.delete 
.esc 
.space 
.up 
.down 
.left 
.right

https://vuejs.org/v2/guide/events.html#Key-Modifiers

can evaluate simple javascript statements in v-on:click 
"simple" = no if / for etc
templates really are a mixture of js + html 

{{ template expressions }}
reactivity, 
true power of the framework comes in when having to listen to all our datapoints and respond 
lots of complex interactions would get incredibly verbose & soupy with ie jquery 

v-model: 2WAY!
  v-bind: model -> html
  v-on:   event -> model

<a v-bind:href="link">link to Dabson</a>
vuejs makes it easier to model cross-property dependencies

DATA IS NOT REACTIVE,
so data{ result: this.counter++}
MUST NOT NAME DATA properties same as METHODS

Known options for vue instance 
  el: Connect to DOM 
  data: store data to be used 
  methods: methods of this vue instance 
  computed: dependent properties 
  watch: (possibly async) fire on data mutation - overides computed

DO NOT REDEFINE SAME NAME IN 
  DATA / METHODS / COMPUTED

WE CAN WATCH COMPUTED METHODS (in lieu of data- see exercise3)

es6 syntax:
  result() {...}

es5 syntax:
  result: function() {...}

computed{ output } is not called like a function, its used as a property
evertyhing stored in computed can be used like something stored in the data object 
only, COMPUTED IS REACTIVE
computed is preffered cause its caching the result instead of recalculating

computed: setup the property, then set a function how it should be computed 
computed is better optimised than watch
however computed MUST be synchronous, watch can be asynchronous

v-on:click === @click 
v-bind:href === :href


---------------------
|   @events                 @click  === v-on:click=...
|   :attributes             :href   === v-attr:href=...
---------------------

key: css class, value: condition

  <div 
    class="demo" 
    @click="attachRed=!attachRed" 
    :class="{red: attachRed, blue: !attachRed}"></div>

can do styling
  :style="{backgroundColor:, 'ff0'}"
  :style="{'background-color': 'ff0}"

can also
  :style="[myStyle, {height: width+'px'}]"

mix & match styles binding
vue-js prefixes for cross-browser compatibility 

setTimeout(func, 5000) - fires after 5000 milliseconds
setInterval(func, 1000) - fires every 1000 milliseconds

conditional classes - condition comes AFTER classname ie 
{red: attachRed, blue: !attachRed}

be sure to double quote keywords if classnames ie 
(.outline is a class)
class="{'outline': toggleOutline}"

failed {condClass: condCond}


V-IF COMPLETELY DETACHES/ATTACHES ELEMENTS (and children) FROM THE DOM!
  (you should use these for error bubbles on forms)

v-if 
v-else-if 
v-else 

<template> is html5 code - it doesnt get rendered in the dom </template

v-show keeps element in dom with display:none 
Note that v-show doesn’t support the <template> element, nor does it work with v-else

vue creates a dynamic local variable for v-for loops 
    data: {
      ingredients: ['meat','fruit','cookies'],
      persons:[
        {name: 'Dabson', age: 128, color: 'red'},
        {name: 'Anna', age:'unknown',color:'blue'}
      ]
    }

    <li v-for="(ingreedient, index) in ingredients">
      {{ ingreedient }} ({{ index }})
    </li>

    (arrayElement, arrayIndex)

v-for (value, key, index) for objs or (value, index) for arrays

  <span v-for="n in 10">
    {{n}}
  </span>
  ew, 1-indexed

vue auto-proxies the array when you push 

if you need to re-order the list, adding :key="ingreedient"
tells vue behind the scense to keep track of the entire 
list element instead of just patch + overwrite 

v-if="Array.isArray(value)"

^ much better check as it doesn't rely on the name of your data

--------------------- Sect4 vue instance


  <progress label="YOU" :value="player.hp" max="100"></progress>
  <progress label="MONSTER" :value="monster.hp" max="100"></progress>

^ assumes 100 hp max

YOU CAN watch nested val by delimiting ie 'player.hp'

ok, so the order of the watch funtions are 
more important than the order of the mutator calls 
async events looks like it just iterates through watch 
to see what changed - kinda makes sense :)

var vueInstance = this; // this must be redefined to access in the callback closure
setTimeout(function() {
  vueInstance.counter = 0;
}, 2000);

----
vf commit message
Multiple vue instances is useful if you have multiple widgets that arnt connected
(ie calender vue widget + map picker vue widget)
If they are connected from biz logic perspective, still reccomended keeping them in one 

vuejs handles proxying for us so we can write 
var vm1 = new Vue({...});
setTimeout(function() {
  vm2.title="Changed by Timer";
}, 3000);

Vue will only create the proxy/watchers for properties you 
define in the vue options!
need to run page via local server to get vue plugin features
vm1.prop1 = "new";
  so vm1.prop1 is accessible, but not reactive

vm1.$data.title
  ^ equivilant way of vm1.title (bypass Vues auto-generated getter)

<button @click="show" ref="myButton">Show Paragraph</button>
vm1.$refs.myButton  //shows the javascript object
  // Vues REF attribute allows you to directly acess elements from vue:

vm1.$refs.heading.innerText = "Something Else";
  // Vue creates a template based off the html code, so vue RERENDERS a template 
  // Its basically overriding the DOM 

CREATE -> MOUNT -> UPDATE -> DESTROY
------------------------ Vue Js Life Cycle Hooks ------------------------
beforeCreate()  -> created() -> 
beforeMount()   -> mounted() ->
beforeUpdate()  -> updated() ->
beforeDestroy() -> destroyed()
-------------------------------------------------------------------------

//<div id="app3"></div>
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});
vm3.$mount('#app3');
  /// You can manually pass in a template to the vue instance

ALTERNATIVELY: 
vm3.$mount(); // (no argument) renders the el(ement), but does not put it anywhere
document.getElementById('app3').appendChild(vm3.$el);
  //uncommon, but interesting 

Components allow you to re-insert a template: in multiple places
Vuejs has an optional compiler that compiles html <template> to vue template:


      vueInstance   <--watch-->   Virtual Dom   <--Update-->   DOM


update is not called if no difference is made (efficient, no needless render)
Destroying just deletes the javascript, the formerly vue-controled html still remains

ch6. Why need a dev server
  - can have cool tools (like compiling es6 to es5 for more compatibility)
  - backend!
  - minification
  - compile single-file templates
  - css compilers (sass/css)

Vue CLI 
  npm install -g vue-cli
  - allows us to fetch VueJS project templates (project setups)
    * simple 
    * webpack-simple
    * webpack (inc testing)
    * browserify / browserify-simple 

vue init webpack-simple vue-cli

                                                                            2018 (6hrs go)
                                                                            10:32 cli install

vue init webpack-simple 
transpiler (source-to-source compiler: converts one lang to another)
  ES6 -> ES5 

index.html    what gets served (edited by vuejs)
              - script src="/dist/build.js" built+transpiled+bundled by webpack 
package.json  manages dependencies 
.bablerc      ES6 transpiler 
App.vue       single-file template 
webpack.config.js   

