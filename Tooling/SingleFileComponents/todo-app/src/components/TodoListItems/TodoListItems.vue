<template>
  <ul>
    <TodoListItem
      v-for="item in items"
      v-bind:item="item"
      v-bind:key="item.id"
      @click-item="clicked"
      v-bind:isDoneItem="isDoneItems"
    />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem/TodoListItem';

export default {
  components: {
    TodoListItem
  },
  props: {
    items: {
      type: Array
    },
    isDoneItems: {
      type: Boolean
    }
  },
  methods: {
    clicked: function(id, type) {
      this.$emit('click-item', id, type);
    }
  }
}
</script>

<style scoped>
  ul {
    padding: 10px;
    list-style-type: none;
  }
</style>
