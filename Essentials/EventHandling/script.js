https://vuejs.org/v2/guide/events.html

var vm = new Vue({
  el: '#app',
  data: {
    title: 'Event Handling',
    number: 0
  },
  methods: {
    addOne: function() {
      this.number++;
    },
    minusOne: function() {
      this.number--;
    },
    say: function(text) {
      alert(text);
    },
    warn: function(text, e) {
      alert(text);
      alert('Button text: ' + e.target.innerHTML )
    }
  }
});

/*
- Thay vì phải dùng event.preventDefault() hoặc event.stopPropagation() bên trong event handlers, chúng ta có thể làm như sau bằng cách sử dụng event modifiers:

<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

*/
