  npm install vue-cli -g
  vue init webpack-simple myProject

https://babeljs.io/learn-es2015/  REALLY GOOD ES6 RESOURCE
https://github.com/vuejs/vue-cli
  webpack    - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  webpack    - simple - A simple Webpack + vue-loader setup for quick prototyping.
  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  browserify - simple - A simple Browserify + vueify setup for quick prototyping.
  pwa        - PWA template for vue-cli based on the webpack template
  simple     - The simplest possible Vue setup in a single HTML file


v-on:click === @click 
v-bind:href === :href

---------------------
|   @events                 @click  === v-on:click=...
|   :attributes             :href   === v-attr:href=...
---------------------


IMPORTING A COMPOENENT
Main.js
  import Home from './Home.vue'
  Vue.component('app-server-status', Home);

Home.vue
  <template>...</template>
  <script>export default {...}</script>

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
  npm install vue-cli -g
  vue init webpack-simple myProject
  - allows us to fetch VueJS project templates (project setups)
    * simple 
    * webpack-simple
    * webpack (inc testing)
    * browserify / browserify-simple 

vue init webpack-simple vue-cli
                                                            Lect #82
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

Ways to make a single-file template (special file compiled druing build process)
  * dont need el property to have our html code converted to a template 
  * dont have to use template property converted to string template 
  -> but we can now split out our template and vue code in separate files 
     and have them compiled to normal javascript
     (can convert any html to js because there are native js representations)

webpack-simple template used for rest of course 
main.js
  render: h => h(App) (es6 arrow function)
  ^ vue.js passes us the render function h, which we then execute with the App template
  here we are specifying it as a compiled template, unlike template 'string'^ 

  Vue file has a template, script ..and maybe a style
export default {}

npm run dev     -> build for development, auto-reload 
npm run build   -> build for production, minified :)

Alternative ways of loading App instead of render():
1. ES6 Spread operator
  babelrc 
    {
      "presets": [
        ["es2015", { "modules": false }],
        ["stage-2"]
      ]
    }

  main.js 
    import Vue from 'vue'
    import App from './App.vue'
     
    const vm = new Vue({
      ...App
    });
     
    vm.$mount('#app');

2. Using mount() (main.js)
  import Vue from 'vue'
  import App from './App.vue'
   
  const vm = new Vue({
    ...App
  });
   
  vm.$mount('#app');

creating a vue instance only applies to the first element!
Prefix component names to not interfere with other packages 
Vue.component('my-cmp');

data is an object when defined in vue instance 
..but a function when defined in vue component {}

Because a component extends the vue instance 
redefining data object interferes with instance data properties 

data: function() {
  return {
    status: 'critical'
  }
}

  -- equiv (closure + arrow function) --

data: () => ({ 
  status: 'Critical'
})

YOU CANNOT SELF-CLOSE COMPONENT TAGS (<my-cmp/> is a no-no)

Vue.component( 'my-comp', {...}) //registers the component globally
new Vue({
  components: {
    'my-comp': cmp //registers the component locally to instance
  }
})

render: h => h(App) // App is an object defined by
// app.vue export default {...}
// defining app as an object gives us the same limitations (replaces)

component elements (local & global) must have only 
ONE ROOT ELEMENT (template element will be removed in the end)
data functions should return an object
{}

es6 import format: 
  import ServerStatus from './ServerStatus.vue'

npm run dev 

GLOBAL IMPORT (main.js)
  Vue.component('app-servers', Home); //global component 

LOCAL IMPORT (App.vue) 
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }

preferably store components in /components or /components/feature for each feature in bigger app-servers
You can use case-sensitive selectors
components: {
  caseSensitiveSelector: myComponent
}

vuejs translates component selectors between camelCase and hypenated 
Servers: Servers, -> Servers,
^this is an ES6 shorthand, not vue :)

<style scoped> for scoping styles (in a vue file)
  - behind the scenes, this emulates the behavior of the shadow dom 
  (in upcoming browsers, each element has a nested/sub dom)
  while its a future browser consideration, vue implements it today (via data hash attribute eg data-v-b6ac6130)

<div data-v-3501a3b2>

<style>
div[data-v-3501a3b2]
</style>/
das prey cool 

next up: communicating between components

<div id="example">
  <my-component></my-component>
</div>

// register
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// create a root instance
new Vue({
  el: '#example'
})

webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules. 
As websites are evolving into web apps they are relying more and more on JavaScipt

Components: 
  * All components are also vue instances (and so accept the same options object, ..mostly)
  * components provide the same lifecycle hooks also (mounted)
  * w3c considers it good practice to use all-lowercase, hyphenated custom tag names 
  *
<table>
  <my-row>...</my-row>
</table>
<table>
  <tr is="my-row"></tr>
</table>
^ because <my-row> is hoisted as an invalid child / out of context, it will error. use is="template-name" to get around this 

  * In Vue, the parent-child component relationship can be summarized as props down, events up. 
    The parent passes data down to the child via props, and the child sends messages to the parent 
    via events. Let’s see how they work next.
  * parent sends data to child via props 
  * A child component needs to explicitly declare the props it expects to receive using the props option:

Vue.component('child', {
  // declare the props
  props: ['message'],
  // like data, the prop can be used inside templates and
  // is also made available in the vm as this.message
  template: '<span>{{ message }}</span>'
})
// call with
<child message="hello!"></child>

  * camelCase vs. kebab-case
  * single-file templates: separation of concerns is not equal to separation of file types
  * 'makes the component more cohesive and maintainable.' - Dbsn strongly agrees 
  * even if you dont like it, you can still leverage hot-reload and pre-compilation features as so:/

<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>

  * dynamic props (parent to child) achived via v-bind 
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
<child :my-message="parentMsg"></child>

v-bind:myProperty
usev-bind without an argument to bind all in obj ie 
todo: {
  a: 'hi',
  b: 'world'
}

<todo-item v-bind="todo"></todo-item> 
..is the same as..
<todo-item
  v-bind:a="todo.hi"
  v-bind:b="todo.world">
</todo-item>

you cant pass down numbers in props, must encapsulate via ajs expression 
One-way data flow (parent to child)

  * Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, 
    mutating the object or array itself inside the child will affect parent state.

  * It is possible for a component to specify requirements for the props it is receiving. 
    If a requirement is not met, Vue will emit warnings. This is especially useful when you are authoring 
    a component that is intended to be used by others.

  * ok so required in prop is required to prevent vue warnings and has nothing to do with form required lol

Vue uses CUSTOM EVENTS for communicating from child components to parents
Every Vue instance implements an events interface, which means it can:
Listen to an event using $on(eventName)
Trigger an event using $emit(eventName)

slots, v-once (for cheap static components)

5:38 break from reading 

9:46 upgraded flusher(again), do more sect8

sublime ctrl+A, ctrl+shift+I 
  {"keys": ["ctrl+shift+i"], "command": "reindent", "args": {"single_line": false}}
/weeeee

<app-user-detail name="myvar">
  ..passes in the literal text value myvar. 
  To make it dynamic, must use colon :name (shorthand for v-bind:name)

this way, you bind the data:name to the components property

naming props: case sensitive?
case-senstive names only work in templates which support it (ie single-file templates)
@todo on every new file: move assets out of /src/
lol, wrong email = no recognised github contributions
git config --global user.email "email@email.email"
user.name = "aaa" ?

you can access props as a regular data property 

up to 108, gj (12:01am)

btcmarkets 
AUD - POLi Payments
Our POLi deposit service is currently unavailable. 
We will announce on social media when the service is back available. 
We recommend using BPAY in the mean time.


    props: ['myName'],

    props: [{
      myName: [String, Array]
    }],


    props: {
      myName: String
    },

    props: {
      myName: {
        type: Object, 
        default: function() {
          return {
            name: 'Dabson';
          }
        }
      }
    }

----- 11:17am start lect 109, perfect window setup
done parent -> child 
now doing child -> parent

Keep in mind that objects& arrays are REFERENCE TYPES! 
so they only exist in memory once, the vars storing them 
only store a pointer

so if you pass an object or array 
from the parent to the child component 
your actually passing the pointer 

  So if you mutate the value in the child, 
  you mutate it everywhere 

so we need to inform the parent that the name did indeed change 
we emit a custom event 

components only extend the vue instance 
we need to define a custom component saying 
the child property changed 

v-on === @


   this.$emit('nameWasReset', this.myName);

<@nameWasReset="name = $event">
so now it was updated in the user component 
we can emit custom events from child to parent (object mutation)

so now we``re 
  * emitting our custom event
  * listeneing for it in the child 

And thats how we can pass data from the child to parent

Parent 
  Child 
  Child 
  Child 

Data only flows
  parent->child  (pass callback as prop)
  child ->parent (use callback/emit custom event)

-- 11:43 break (pomodoro)
   11:52 return

you can also add atributes to pass data between parent & child 
  -props + custom event 
  -props + passing callback as a prop 
    (which executes a method in the parent, 
    but passing at a prop makes it 
    executable in the child)

--parent 
  <app-user-detail 
          :myName="name" 
          :resetFn="resetName">

  data.methods.resetName() {
    this.name = 'Dabs'
  }
--child 
  props: {
    resetFn: Function
  }

<app-user-edit
  :userAge="age"
  @ageWasEdited="age = $event">    

central class to store the data (ng2 == services)

main.js ---
  export const eventBus = new Vue();

userEdit.vue ---
  import { eventBus } from '../main';
    data.methods.editAge() {
      this.userAge = 30;
      eventBus.$emit('ageWasEdited', this.userAge');
    }

we can emit events on different instances
(ie eventBus)
(we have to create the eventBus before loading all the components)
ie, export eventBus = new Vue(); before defining local vue instance 

vuex: managing state 

-- 12:30 break 
   12:51 restart

we can put the emit logic in the event bus: 
export const eventBus = new Vue({
  methods: {
    changeAge() {
      this.$emit('ageWasEdited', age);
    }
  }
});
  eventBus.$emit('ageWasEdited', this.userAge);
  eventBus.changeAge(this.userAge);

you can centralise mutators by putting 
them in the bus (main.js)

loop through each data.servers 
create a component for server 
pass id + status to component 
be able to click this component 
then have a button that lets you 
change the status back to normal 

index in 5

  <li class="list-group-item"
      v-for="(s, index) in servers">
  Server #{{ s.id }} {{ s.status }} {{ index + 1 }}
  </li>

  <ServerDetails 
    :id="s.id"
    :status="s.status">
  </ServerDetails>,

    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
^ hoook in an event listener

@nameWasReset="name = $event"

link event callback: 
@nameWasReset="name = $event",
  created() {
    this.$on('selectedServer', (server) => {
      this.selectedServer = server;
      alert('hi' + server.id);
    });
  }
  ^ manual binding callback applies when you have eventBus object 

@nameWasReset="name = $event"

export const eventBus = new Vue({
  methods: {
    set
  }
}); 

could go from Sever -> Servers -> App (all with custom events)
hell use a bus instead 
//summary of what he did 

Created Server.vue, removed object 

main.js 
export const serverBus = new Vue()

Server.vue -----
<li
  @click="serverSelected">
    Server #{{ server.id }}
</li>/
...
  import { serverBus } from '../../main'
  export default {
    props: ['server'],
    methods: {
      serverSelected() {
        serverBus.$emit('serverSelected', this.server);
      }
    }
  }

Servers.vue -----
import Server from './Server.vue'
<app-server 
  v-for"server in servers" 
  :server="server">
<//ap.server>
...
components: {
  appServer: Server //can use with <app-server> in the template
}

ServerDetails.vue ---
  <p v-if="!server">Please Select a Server</p>/
  <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>/
  <hr>
  <button @click="resetStatus">Change to Normal</button>/
...
  import { serverBus } from '../../main';
  export default {
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      resetStatus() {
        this.server.status = 'Normal'
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server
      });
    }
  }

Summary: 
  * Servers.servers holds all the server data 
  * Servers. loops through all servers and passes each server into Server. as a prop 
  * Server.server is a prop passed in from outside
  * Make Server. - emits an event 'serverSelected': server 
  * Make a button in ServerDetails. to update this.data.server.status = 'Normal' 
  * dont need to pass it back because server is an object (reference type)

ok so Server emits the 'selectedServer' event,
and ServerDetails has a listener to check on 'serverSelected' 
then set the ServerDetails.server to Server.server 
