<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 id="exx" v-myon:click="trig">Directives Exercise</h1>
        <div style="width:100px;height:100px;background-color:lightgreen"
            v-myon:mouseenter="log"
            v-myon:mouseleave="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myon: {
      bind(el, binding, vnode) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },

  methods: {
    trig(e) {
      alert("I got clicked");
    },
    log(e) {
      console.log('Event '+e.type); // Moue mouseentered
    }
  }
}
</script>

<style>
</style>
