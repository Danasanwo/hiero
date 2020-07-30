<template>
  <div class="signup">
    <h1 id="cancel">x</h1>
    <div class="sign">
      <form action>
        <fieldset>
          <legend>Sign up</legend>

          <input type="text" name="fName" id="fname" placeholder="First name" required />
          <input type="text" name="lName" id="lName" placeholder="Last name" required />
          <input type="text" name="username" id="username" placeholder="username of your choice" />
          <input type="email" name="email" id="email" placeholder="email" required />
          <label for="avatar" style="margin: 0 0 0 10%">Pick avatar</label>
          <input type="file" name="avatar" id="avatar" accept="image/*" />

          <textarea name="bio" id="bio" cols="30" rows="10" placeholder="write a bio"></textarea>
          <input type="password" name="password" id="password" placeholder="password" />
          <input type="password" name="cpassword" id="cassword" placeholder="comfirm password" />

          <button type="submit">Submit</button>
        </fieldset>

        <p style="text-align:center">or you can use</p>
        <button>Google Account</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style scoped>
.signup {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  /* height: 100vh; */
  background: rgba(00, 00, 0, 0.6);
}

#cancel {
  color: red;
  position: fixed;
}

.sign {
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
  margin: 1px auto;
  display: block;
}
</style>
