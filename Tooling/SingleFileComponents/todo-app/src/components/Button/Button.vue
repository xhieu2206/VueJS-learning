<template>
  <button
    v-bind:class="{ 'Danger': btnType === 'Danger', 'Success': btnType === 'Success' }"
    @click="onClicked"
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
  inject: ['clicked', 'isDoneItems', 'items'],
  methods: {
    onClicked() {
      const type = this.btnType === 'Danger' ? 'delete' : 'done';
      this.clicked(this.id, type);
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
