var data = {
  message: 'Message',
  otherMessage: 'Other Message',
  rawHtml: '<button style="color: red">Raw HTML</button>',
  colorStyle: {
    red: 'red'
  },
  seen: true,
  textArr: ['This', 'is', 'VueJS'],
  key: 'key'
}

Vue.component('li-item', {
  props: ['text'],
  template: `<li>{{ text }}</li>`,
  destroyed: function() {
    console.log(`DESTROED in li-item component`);
  }
});

var vm = new Vue({
  el: '#app',
  data: data,
  created: function() { // run code after an instance is created
    // `this points to vm instance`
    console.log('CREATED - message is: ', this.message);
  },
  mounted: function() { // called sau khi instance được mounted, nơi mà `el` được replaced bởi newly created vm.$el. Cần nhớ rằng `mounted` không đảm bảo rằng các child components cũng sẽ được mounted. Nếu muốn đợi đến khi toàn bộ view được rendered, sử dụng vm.nextTick bên trong `mounted`
    console.log(`MOUNTED`);
    this.$nextTick(function() {
      console.log(`nextTick in MOUNTED`);
    });
  },
  methods: {
    toggleSeenHandler: function() {
      this.seen = !this.seen;
    }
  },
  updated: function() {
    /*
    - called sau khi data changed dẫn đến virtual DOM sẽ bị re-rendered và patched
    - component's DOM sẽ được updated khi hook này được called, có thể thực hiện các DOM-dependent operations ở đây, tuy nhiên trong đa số các trường hợp chúng ta nên tránh việc change state bên trong hook.
    */
    console.log(`UPDATED - messsage: "${this.message}"`);
  },
  destroyed: function() {
    /*
    - được called sau khi một Vue instance bị destroyed
    */
   console.log(`DESTROYED`);
  }
});

// Vue instance cung cấp các instance properties và methods, được prefix với $ để phân biệt với các user-defined properties

/*
console.log(vm.$data === data); // true
console.log(vm.$el === document.getElementById('app')); // true
*/

// Directives
/*
  - Dynamic Args: từ vue 2.6.0+, có thể dùng dùng JS expression trong directive arg bằng cách bọc trong []
    exp: <a v-bind:[attributeName]="url"> ... </a>
*/
