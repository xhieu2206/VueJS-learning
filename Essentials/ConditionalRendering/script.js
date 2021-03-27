const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Conditional Rendering',
    isAwesome: true
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
    number: 1
  },
  methods: {
    randomButtonClickHandler: function() {
      this.number = randomIntFromInterval(1, 3);
    }
  }
});

// tham khảo: https://vuejs.org/v2/guide/conditional.html#Controlling-Reusable-Elements-with-key
const vm3 = new Vue({
  el: '#app3',
  data: {
    loginType : true
  },
  methods: {
    toggleLoginTypeHandler: function() {
      this.loginType = !this.loginType;
    }
  }
});

/*
  - v-show gần giống v-if, khác biệt là v-show sẽ luôn luôn rendered và remain trong DOM, chỉ toggles `display` CSS property của element
  - v-show không support <template> element, và cũng không hoạt động với v-else
*/

// # With Components: comeback later sau khi đã nắm về Basic về Vue Component
