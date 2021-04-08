<template>
  <table>
    <tr>
      <th></th>
      <th
        v-for="user in users"
        :key="user.id"
      >{{ user.name }}</th>
    </tr>
    <Row
      v-for="record in records"
      :users="users"
      :key="record.id"
      :amount="parseInt(record.amount)"
      :name="record.name"
      :date="record.date"
    ></Row>
  </table>
</template>

<script>
import Row from './Row/Row';

export default {
  components: { Row },
  props: {
    users: {
      type: Array
    },
    records: {
      type: Array
    }
  }
}
</script>

<style>
table {
  margin: auto;
}

table, tr, td, th {
  border-collapse: collapse;
  border: 1px solid black;
}

th, td {
  width: 15%;
}

@media screen and (max-width: 992px) {
  table {
    width: 100%
  }
}
</style>
