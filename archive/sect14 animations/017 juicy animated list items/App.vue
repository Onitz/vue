<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="Fade">Fade</option>
          <option value="Slide">Slide</option>
          <option value=""></option>
        </select>
        <br><br>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br><br>
        <transition :name="alertAnimation">
          <div v-show="show" class="alert alert-info">This is some info</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div v-if="show" class="alert alert-info">This is some info</div>
        </transition>
        <transition 
            appear
            enter-class=""
            enter-active-class="animated bounce"
            leave-class=""
            leave-active-class="animated shake"
            >
          <div v-if="show" class="alert alert-info">This is some info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div v-if="show" class="alert alert-info" key="info">This is some info</div>
          <div v-if="!show" class="alert alert-warning" key="warning">This is some Warning</div>
        </transition>
        <hr>
        <!-- using js transitions here instead of css -->
        <button class="btn btn-primary" @click="load=!load">Load / Remove Element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width:300px;height:100px;background-color:lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary"
          @click="selectedComponent=='SuccessAlert'?selectedComponent='DangerAlert':selectedComponent='SuccessAlert'">Toggle Components</button>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button id="add" class="btn btn-primary" @click="addItem">Add Item</button>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item" 
                v-for="(number, index) in numbers"
                @click="removeItem(index)"
                style="cursor:pointer;"
                :key="number">
              {{ number }}
            </li>
          </transition-group>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './DangerAlert.vue';
  import SuccessAlert from './SuccessAlert.vue';

  export default {
    components: {
      DangerAlert,
      SuccessAlert
    },
    data() {
      return {
        show: false,
        load: false,
        alertAnimation: 'fade',
        elementWidth:100,
        selectedComponent: 'SuccessAlert',
        numbers: [1,2,3,4,5]
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('before enter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if(round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20); //every 20ms change div
        // done(); //needed to tell vue its done, else vue infers this from timing on transition property
      },
      afterEnter(el) {
        console.log('after enter');
      },
      enterCancelled(el) {
        console.log('enter caned');
      },
      beforeLeave(el) {
        console.log('before leave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if(round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('after leave');
      },
      leaveCancelled(el) {
        console.log('leave canned');
      },

      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length+1);
      },
      removeItem(index) {
        // console.log('splicing ' + index + ', 1');
        this.numbers.splice(index, 1);
        // console.log(this.numbers);
      }
    }
  }
</script>

<style>
/*.v-enmter default*/
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    /*opacity: 1;*/
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }



  .slide-enter {
    /*transform: translateY(20px);*/
    opacity:0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity:0;
    position:absolute;
  }


  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(120px);  
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);  
    }
    to {
      transform: translateY(120px);
    }
  }
</style>
