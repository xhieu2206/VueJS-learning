const data = {
  message: 'Message',
  firstName: 'Nguyen',
  lastName: 'Hieu'
}

var vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('');
    },
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(newFullName) {
        var names = newFullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});

vm.fullName = 'Xuan Hieu'
console.log(vm.$on);
console.log(vm.data);

// Computed vs Watched Property
/*
  - Khi chúng ta có some data needs to change based on some other data => `watched` sẽ được sử dụng
  - Computed là đủ trong phần lớn các case, tuy nhiên cũng có những trường hợp mà `watch` nên được sử dụng hơn, giả sử như khi chúng ta muốn thực hiện async operations in response to changing data, example: index_2.html
*/
