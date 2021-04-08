<template>
  <button @click.self.prevent="clicked" :class="[btnType]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'success'
    }
  },
  methods: {
    clicked: function() {
      this.$emit('on-click');
    }
  }
}
</script>

<style scoped>
button {
  padding: 2px;
  margin: 2px;
  color: white;
}

.danger {
  background-color: red;
}

.primary {
  background-color: blue;
}

.success {
  background-color: green;
}
</style>
