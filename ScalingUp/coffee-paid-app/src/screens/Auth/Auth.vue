<template>
  <form>
    <div class="form-control">
      <label for="Email">Email:</label>
      <Input @on-change="email = $event" :type="'email'" :placeholder="'Email'"></Input>
    </div>
    <div class="form-control" v-if="!isLogin">
      <label for="Username">Username:</label>
      <Input @on-change="username = $event" :type="'text'" :placeholder="'Username'"></Input>
    </div>
    <div class="form-control">
      <label for="Password">Password:</label>
      <Input @on-change="password = $event" :type="'password'" :placeholder="'Password'"></Input>
    </div>
    <Button @on-click="auth">{{ isLogin ? 'Login' : 'Sign Up' }}</Button>
    <Button @on-click="switchAuthType" :btnType="'primary'">Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</Button>
  </form>
</template>

<script>
import axios from 'axios';
import { SIGNIN_ENTRY_POINT, SIGNUP_ENTRY_POINT, ENTRY_POINT } from '../../constants/URLs';
import { API_FIREBASE_KEY } from '../../constants/API_KEYs';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export default {
  components: {
    Input, Button
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
      username: ''
    }
  },
  mounted: function() {
    if (this.isLoggedIn) {
      this.$router.replace('/items');
    }
  },
  methods: {
    switchAuthType: function() {
      this.isLogin = !this.isLogin;
    },
    auth: function() {
      if (!this.isLogin) {
        axios.post(`${SIGNUP_ENTRY_POINT}${API_FIREBASE_KEY}`, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }).then(res => {
          this.$emit('set-credential', res.data.idToken, res.data.email);
          localStorage.setItem('token', res.data.idToken);
          return axios.post(`${ENTRY_POINT}/users.json?auth=${res.data.idToken}`, {
            name: this.username,
            email: this.email
          })
        }).then(() => {
          console.log('Register new user successfully');
          this.$router.replace('/items');
        }).catch(err => {
          console.log(err.response.data.error.message);
        });
      } else {
        axios.post(`${SIGNIN_ENTRY_POINT}${API_FIREBASE_KEY}`, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }).then(res => {
          localStorage.setItem('token', res.data.idToken);
          this.$emit('set-credential', res.data.idToken, res.data.email);
          this.$router.replace('/items');
        }).catch(err => {
          console.log(err.response.data.error.message);
        });
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
