// https://vuejs.org/v2/guide/list.html

const vm = new Vue({
  el: '#app',
  data: {
    title: 'List Rendering',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  methods: {
    toggleIsAwesomeHandler: function() {
      this.isAwesome = !this.isAwesome;
    }
  }
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  methods: {
    toggleIsAwesomeHandler: function() {
      this.isAwesome = !this.isAwesome;
    }
  }
});

const vm3 = new Vue({
  el: '#app3',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
});

const vm4 = new Vue({
  el: '#app4',
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(num => num % 2 === 0);
    }
  }
});

// Có thể dùng v-for với <template>

/*
// v-for với v-if:
  - khi cùng xuất hiện ở cùng một node, v-for luôn có độ ưu tiên cao hơn v-if.
  --------------- --------------- --------------- --------------- --------------- ---------------
  <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo }}
  </li>
  --------------- --------------- --------------- --------------- --------------- ---------------
*/

// v-for with components: comeback later
