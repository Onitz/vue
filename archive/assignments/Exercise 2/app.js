new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          storeVal: function() {
            this.value = event.target.value;
          },
          showAlert: function() {
            alert('alert');
          }
        }
    });