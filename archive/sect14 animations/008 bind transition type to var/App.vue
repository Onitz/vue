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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        alertAnimation: 'fade'
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
    animation: slide-in .5s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity:0;
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
