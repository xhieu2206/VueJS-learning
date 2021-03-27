var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleDateString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Now you see me',
    seen: true
  }
});

app3.seen = false;

var app4 = new Vue({
  el: '#app-4',
  data: {
    messages: [
      { text: 'Text 1' },
      { text: 'Text 2' },
      { text: 'Text 3' },
    ]
  }
});

app4.messages.push({ text: 'Something new' });

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Test Input'
  },
  methods: {
    reverseMessgae: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello'
  }
});

Vue.component('item', {
  props: ['item'],
  template: `<li>{{ item.text }}</li>`
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    items: [
      { id: 0, text: 'item 1'},
      { id: 1, text: 'item 2'},
      { id: 2, text: 'item 3'},
    ]
  }
});
