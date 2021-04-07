<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Input
      v-on:submitted-item="add"
    />
    <TodoListItems
      v-if="items.length > 0"
      v-bind:items="items"
      @click-item="clicked"
      v-bind:isDoneItems="false"
    />
    <h5 v-else>There is nothing to do now</h5>
    <hr />
    <TodoListItems
      v-bind:items="doneItems"
      @click-item="clicked"
      v-bind:isDoneItems="true"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Input from './components/Input/Input';
import TodoListItems from './components/TodoListItems/TodoListItems';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      doneItems: [],
      currentId: 0,
    }
  },
  components: {
    Input, TodoListItems
  },
  methods: {
    add: function(value) {
      this.currentId++;
      this.items.push({
        id: this.currentId,
        content: value
      });
    },
    clicked: function(id, type) {
      if (type === 'delete') {
        this.items = this.items.filter(item => item.id !== id);
      } else if (type === 'done') {
        const doneTtem = this.items.find(item => item.id === id);
        this.items = this.items.filter(item => item.id !== id);
        this.doneItems.push(doneTtem);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
