new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result: function() {
            return this.value == 37 ? 'done' : 'not there yet';
          }
        },
        watch: {
          result: function() {
            console.log('result triggered');
            var vm = this;
            setTimeout(function() {
              vm.value = 0;
            },5000);
          }
        }
    });

/*
Interesting:
  result is based off value
  comparing value counts as a mutation, which triggers the watch function
  3-way loop

*/