<template>
  <select v-model='selected' @change="onChanged">
    <option disabled value="">Please select one</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    onChanged: function() {
      this.$emit('on-select', this.selected);
    }
  }
}
</script>
