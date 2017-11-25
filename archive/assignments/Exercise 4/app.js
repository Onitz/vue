new Vue({
  el: '#exercise',
  data: {
    toggle: false,
    myClass: '',
    condClass: 'outlee',
    condCond: true,
    myStyle: {
      backgroundColor:'yellow',
      border: '1px solid red',
      width: '50px',
      height: '50px'
    },
    load: 0,
    vueVarGreen: 'green'
  },
  methods: {
    startEffect: function() {
      var vm = this;

      setInterval(function f(){
        console.log(vm.myClass);
        vm.toggle = !vm.toggle;
      }, 500);
    },
    startProgress: function() {
      var vm = this;
      var ticker = setInterval(function f(){
        if( vm.load > 99 ) {
          clearInterval(ticker);
          return;
        }
        vm.load++;
        console.log(vm.load);
      }, 50);
    }
  },
  computed: {
    loadbar: function() {
      return {
        display: 'block',
        backgroundColor: 'purple',
        width: this.load + 'px'
      };
    }
  }
});
