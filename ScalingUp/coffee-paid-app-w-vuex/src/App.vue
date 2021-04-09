<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="isLoggedIn" to="/items/new">New</router-link>
      <span v-if="isLoggedIn"> | </span>
      <router-link v-if="isLoggedIn" to="/items"> List</router-link>
      <span v-if="isLoggedIn"> | </span>
      <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
      <router-link v-if="!isLoggedIn" to="/auth">Auth</router-link>
    </div>
    <router-view
      @set-credential="setCredential"
      :token="token"
      :isLoggedIn="isLoggedIn"
      :email="email"
    />
  </div>
</template>

<script>
import axios from 'axios';
import { GET_USER_DATA_ENTRY_POINT } from './constants/URLs';
import { API_FIREBASE_KEY } from './constants/API_KEYs.js';

export default {
  data() {
    return {
      items: [],
      token: '',
      email: '',
      isLoggedIn: false
    }
  },
  created: function() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post(`${GET_USER_DATA_ENTRY_POINT}${API_FIREBASE_KEY}`, {
        idToken: token
      }).then(res => {
        if (res.data.users.length > 0) {
          this.setCredential(token, res.data.users[0].email);
        }
      })
    }
  },
  methods: {
    setCredential(token, email) {
      this.token = token;
      this.email = email;
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.clear();
      this.email = '';
      this.token = '';
      this.isLoggedIn = false;
      this.$router.replace('/auth');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
