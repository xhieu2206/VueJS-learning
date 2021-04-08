<template>
  <tr>
    <td>{{ date | dateTransform }}</td>
    <td
      v-for="user in users"
      :key="user.id"
      :class="{ 'green': user.name === name }"
    >
      {{ user.name === name ? amount : '' }}
    </td>
  </tr>
</template>

<script>

export default {
  props: {
    date: {
      type: Number
    },
    users: {
      type: Array
    },
    amount: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
td {
  text-align: left;
}

.green {
  color: white;
  background-color: green;
}
</style>
