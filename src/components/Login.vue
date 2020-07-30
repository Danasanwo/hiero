<template>
  <div class="login">
    <h1 id="cancel">x</h1>
    <div class="log">
      <form action>
        <fieldset>
          <legend>Log in</legend>
          <input type="email" name="email" id="email" placeholder="email" />
          <input type="password" name="password" id="password" placeholder="password" />
          <button type="submit">Login</button>
        </fieldset>

        <p>
          You do not have an account?
          <a href="src/components/Signup.vue">Sign up</a>
        </p>
      </form>
      <!-- <p>Or use your Google account</p>
      <button>Google</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login {
  position: fixed;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  background: rgba(00, 00, 0, 0.6);
}

#cancel {
  color: red;
  position: fixed;
}

.log {
  width: 80%;
  background: #f4f6ff;
  margin: 20vh auto;
}
fieldset {
  width: 90%;
  margin: 10vh auto;
}

legend {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

input {
  display: block;
  outline: none;
  margin: 5px auto;
  width: 80%;
  height: 35px;
  border: 1px black solid;
  transition: all 0.3s;
}
input:focus {
  width: 80.5%;
  border: 2px black solid;
}
textarea {
  width: 80%;
  margin: 5px 10%;
}
button {
  margin: 1px 45%;
}
</style>
