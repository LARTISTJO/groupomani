<template>
  <img src="../assets/icon-left-font.png"> 
    <form method="post" @submit.prevent="loginUser" class="card">
      <h1 class="card__title">Connexion</h1>
      <div class="form-row">
        <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail" />
      </div>
      <div class="form-row">
        <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="form-row">
        <button type="submit" class="button">Connexion</button>
      </div>
      <div class="error" v-if="error"> {{ error.error }} </div>
    </form>
</template>


<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      token: "",
      email: "",
      password: "",
      userId: "",
      error: "",
    };
  },
  methods: {
    async loginUser() {
      await axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          { localStorage.setItem("token", res.data.token);}
          this.$router.push("/forum");
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
  },
};
</script>
<style>
.error
{
  color:gray;
  font-size: 1.7em;
  font-weight:800;
}
</style>