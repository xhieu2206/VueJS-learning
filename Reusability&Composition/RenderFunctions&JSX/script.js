// https://vuejs.org/v2/guide/render-function.html

// https://jsonplaceholder.typicode.com/posts

Vue.component('blog-post', {
  props: ['postTitle'],
  template: `<h3 class="title">{{ postTitle }}</h3>`
});

/*
Basics:
- Vue khuyên chúng ta sử dụng templates để build HTML trong phần lớn các cases, tuy nhiên có những tinh huống mà chúng ta thực sự cần đến sức mạnh đến từ JS, đó là lúc chúng ta có thể dùng `render` fucntion. Bằng cách sử dụng `render` function, chúng ta có thể dynamic render size của component <anchored-heading> một cách hiệu quả hơn, thay vì sử dụng `v-if` directive truyền thống.
*/f

/*
Nodes, Tree & Virtual DOM: https://vuejs.org/v2/guide/render-function.html#Nodes-Trees-and-the-Virtual-DOM
- Vue có thể thực hiện việc update các node bằng cách dùng virtual DOM để keep track sự thay đổi cần thiết để tạo ra REAL DOM. (https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM)
*/

Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag namef
      this.$slots.default // array of children
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    title: 'Render Functions & JSX',
    name: 'Root Component'
  },
  methods: {
    // ...
  },
  created: function() {
    // ...
  }
});
