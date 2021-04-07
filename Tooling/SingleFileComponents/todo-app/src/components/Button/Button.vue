<template>
  <button
    v-bind:class="{ 'Danger': btnType === 'Danger', 'Success': btnType === 'Success' }"
    @click="clicked"
  >
    <slot></slot>
  </button>
</template>

<script>

export default {
  props: {
    btnType: {
      type: String,
      default: 'Success'
    },
    id: {
      type: Number
    }
  },
  methods: {
    clicked() {
      if (this.btnType === 'Danger') {
        this.$emit('clicked-item', this.id, 'delete');
      } else {
        this.$emit('clicked-item', this.id, 'done');
      }
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

.Danger {
  background-color: red;
}

.Success {
  background-color: green;
}
</style>
