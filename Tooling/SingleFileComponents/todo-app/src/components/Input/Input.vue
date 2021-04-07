<template>
  <input
    v-model="value"
    v-on:keyup.enter="submit"
  />
</template>

<script>
export default {
  name: 'input-item',
  data () {
    return {
      value: ""
    }
  },
  methods: {
    submit() {
      if (this.value.trim() !== '') {
        this.$emit('submitted-item', this.value);
        this.value = '';
      }
    }
  }
}
</script>
