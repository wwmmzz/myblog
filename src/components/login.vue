<template>
  <div id="login">
    <div class="login-page">
      <div class="form">
        <div class="register-form" v-if="!account">
          <input type="text" placeholder="name" v-model="user.name" />
          <input type="password" placeholder="password" v-model="user.password" />
          <button @click="regist">注册</button>

          <p class="message">
            已有账号？
            <a href="#" @click="acco">登录</a>
          </p>
        </div>
        <form class="login-form" v-if="account">
          <input type="text" placeholder="username" v-model="user.name"  />
          <input type="password" placeholder="password" v-model="user.password" />
          <button @click="login">登录</button>

          <p class="message">
            没有账号?
            <a href="#" @click="acco">注册</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      account: true
    };
  },
  methods: {
    login() {
      this.$store.commit("login", this.user);
      if (this.$store.state.loginstate) {
        this.$router.replace({
          path: "/home"
        });
      }
    },
    regist() {
      this.$store.commit("regist", this.user);
    },
    acco() {
      this.account = !this.account;
      console.log(this.account);
    }
  }
};
</script>

<style lang="" scoped>
/* @import url(https://fonts.googleapis.com/css?family=Roboto:300); */

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
/* .form .register-form {
  display: none;
} */

@media screen and (min-width: 900px) {
  .form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.01);
  }
}
</style>