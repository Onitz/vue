new Vue({
  el: '#exercise',
  data: {
    toggle: false,
    myClass: '',
    condClass: 'outlee',
    condCond: true,
    myStyle: '',
    load: 0
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
        vm.load++;
        if( vm.load > 99 ) {
          clearInterval(ticker);
        }
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
