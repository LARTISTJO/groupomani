<template>
  <img src="../assets/icon-left-font.png"> 
    <form method="post" @submit.prevent="createAccount" class="card">
      <h1 class="card__title">Inscription</h1>
      <p class="card__subtitle">Tu as déjà un compte ? <router-link to="/login" class="card__action">Connexion</router-link></p>
      
      <div class="form-row">
        <input v-model="email" class="form-row__input" type="email" placeholder="Adresse mail"/>
      </div>
      <div class="form-row">
        <input v-model="pseudo" class="form-row__input" type="text" placeholder="Pseudo"/>
      </div>
      <div class="form-row">
        <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="form-row">
        <button type="submit" @click.prevent="createAccount" class="button">Créer mon compte</button>
      </div>
    </form>
     <div class="error" v-if="error"> {{ error.error }} </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'login',
  data () {
    return {
      email: '',
      pseudo: '',
      password: '',
      error: '',
    }
  },
   methods: {
    async createAccount() {
      const data = {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password,
      };
      await axios
        .post("http://localhost:3000/api/auth/signup", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style scoped>


.button:hover 
{
  cursor:pointer;
  background: #1976D2;
}

.button--disabled 
{
  background:#cecece;
}

.button--disabled:hover 
{
  cursor:not-allowed;
  background:#cecece;
}

</style>>