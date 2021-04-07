<template>
  <input
    v-model="value"
    :placeholder="placeholder"
    :type="type"
    @change="onChanged"
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
      this.$emit('on-change', this.value);
    }
  }
}
</script>
