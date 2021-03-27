const vm = new Vue({
  el: '#app',
  data: {
    title: 'Class and Style Bindings',
    isActive: true,
    isDanger: true
  },
  methods: {
    toggleActiveHandler: function() {
      this.isActive = !this.isActive;
    },
    toggleDangerHandler: function() {
      this.isDanger = !this.isDanger;
    }
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive,
        danger: this.isDanger
      }
    }
  }
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Class and Style Bindings',
    styleObject: {
      color: 'red',
      textDecoration: 'underline'
    }
  }
});

const vm3 = new Vue({
  el: '#app3',
  data: {
    firstObjectStyle: {
      color: 'red'
    },
    secondObjectStyle: {
      textDecoration: 'underline'
    }
  }
})

// # With Components: comeback later sau khi đã nắm về Basic về Vue Component
