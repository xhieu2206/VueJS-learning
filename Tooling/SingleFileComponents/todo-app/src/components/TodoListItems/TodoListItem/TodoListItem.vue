<template>
  <li>
    <p>{{ item.content }}</p>
    <Button
      v-bind:btnType="'Success'"
      v-bind:id="item.id"
      v-bind:class="'button-inline'"
      v-if="!isDoneItem"
    >
      Done
    </Button>
    <Button
      v-bind:btnType="'Danger'"
      v-bind:id="item.id"
      v-bind:class="'button-inline'"
      v-if="!isDoneItem"
    >
      Delete
    </Button>
  </li>
</template>

<script>
import Button from '../../Button/Button';

export default {
  components: {
    Button
  },
  props: {
    item: {
      type: Object
    },
    isDoneItem: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked: function(id, type) {
      this.$emit('click-item', id, type);
    }
  }
}
</script>

<style>
li {
  width: 30%;
  text-align: left;
  margin: 2px auto 2px auto;
  padding: 5px;
  border: solid 1px black;
}

li > p {
  display: inline-block;
  width: 70%;
}

.button-inline {
  display: inline-block;
  width: 13%;
}
</style>
