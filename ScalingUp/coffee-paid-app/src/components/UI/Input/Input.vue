<template>
  <input
    v-model="value"
    :placeholder="placeholder"
    :type="type"
    @change="onChanged"
    :name="placeholder"
  />
</template>

<script>
export default {
  name: 'input-item',
  data() {
    return {
      value: '',
    }
  },
  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String
    }
  },
  methods: {
    onChanged() {
      console.log(this.value);
      this.$emit('on-change', this.value);
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
}
</style>
