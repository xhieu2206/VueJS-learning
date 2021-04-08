<template>
  <div>
    <form>
      <div class="form-control">
        <label>Name:</label>
        <Select
          :options="optionsTransform"
          @on-select="changeNameHandler"
        ></Select>
      </div>
      <div class="form-control">
        <label for="Amount">Amount</label>
        <Input
          :placeholder="'Amount'"
          :type="'number'"
          @on-change="moneyChangedHandler"
        ></Input>
      </div>
      <div class="form-control">
        <label for="Date">Date</label>
        <Input
          :placeholder="'Date'"
          :type="'date'"
          @on-change="dateChangedHandler"
        ></Input>
      </div>
      <Button @on-click="submittedHandler" :btnType="'primary'">Submit</Button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import Button from '../../components/UI/Button/Button';
import { ENTRY_POINT } from '../../constants/URLs';

export default {
  name: 'lists',
  components: {
    Input, Select, Button
  },
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
      selectedUserId: '',
      amount: 0,
      date: '',
      users: []
    }
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.replace('/auth');
    } else {
      axios.get(`${ENTRY_POINT}/users.json?auth=${this.token}`)
        .then(res => {
          const users = [];
          for (let key in res.data) {
            users.push({
              id: key,
              email: res.data[key].email,
              name: res.data[key].name
            })
          }
          this.users = [...users];
        })
    }
  },
  computed: {
    optionsTransform() {
      return this.users.map(user => {
        return {
          text: user.name,
          value: user.id
        }
      })
    }
  },
  methods: {
    changeNameHandler(value) {
      this.selectedUserId = value;
    },
    moneyChangedHandler(value) {
      this.amount = value
    },
    dateChangedHandler(value) {
      this.date = value;
    },
    submittedHandler() {
      if (this.amount > 0 && this.date !== '' && this.selectedUserId !== '') {
        const selectedUser = this.users.filter(user => {
          return user.id === this.selectedUserId;
        })[0];
        axios.post(`${ENTRY_POINT}/items.json?auth=${this.token}`, {
          user: selectedUser,
          date: this.date,
          amount: this.amount
        }).then(() => {
          this.$router.replace('/items');
        }).catch(() => {
          console.log('Something went wrong!!!');
        })
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 40%;
}

@media screen and (max-width: 992px) {
  .form-control {
    width: 100%
  }
}
</style>
