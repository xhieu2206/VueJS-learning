<template>
  <RecordTable
    :users="users"
    :records="items"
  ></RecordTable>
</template>

<script>
import axios from 'axios';
import { ENTRY_POINT } from '../../constants/URLs';
import RecordTable from '../../components/RecordTable/RecordTable';

export default {
  components: { RecordTable },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    email: {
      type: String
    },
    token: {
      type: String
    }
  },
  data() {
    return {
      users: [],
      items: []
    }
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.replace('/auth');
    } else {
      const getUsers = axios.get(`${ENTRY_POINT}/users.json?auth=${this.token}`);
      const getItems = axios.get(`${ENTRY_POINT}/items.json?auth=${this.token}`);
      Promise.all([getUsers, getItems])
        .then(values => {
          const users = [];
          const items = [];
          for (let key in values[0].data) {
            users.push({
              id: key,
              email: values[0].data[key].email,
              name: values[0].data[key].name
            })
          }
          this.users = [...users];
          for (let key in values[1].data) {
            items.push({
              id: key,
              date: Date.parse(values[1].data[key].date),
              name: values[1].data[key].user.name,
              email: values[1].data[key].user.email,
              amount: values[1].data[key].amount,
            })
          }
          this.items = [...items].sort((a, b) => {
            return b.date - a.date;
          });
        })
        .catch(() => {
          console.log('Something went wrong!!!');
        })
    }
  }
}
</script>
