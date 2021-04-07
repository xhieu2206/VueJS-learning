<template>
  <div>
    <form>
      <div class="form-control">
        <label>Name:</label>
        <Input
          :placeholder="'Name'"
          :type="'text'"
          @on-change="changeNameHandler"
        ></Input>
      </div>
      <div class="form-control">
        <label for="Amount">Amount</label>
        <Input
          :placeholder="'Amount'"
          :type="'number'"
          @on-change="moneyChangedHandler"
        ></Input>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '../../components/UI/Input/Input';

export default {
  name: 'lists',
  components: {
    Input
  },
  data() {
    return {
      name: '',
      amount: 0,
    }
  },
  methods: {
    changeNameHandler(value) {
      this.name = value;
    },
    moneyChangedHandler(value) {
      this.amount = value
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
</style>
