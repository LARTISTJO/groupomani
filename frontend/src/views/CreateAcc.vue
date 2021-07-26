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
          this.$router.push("/forum");
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

input::placeholder 
{
  color: #787878;

}

.form-row 
{
  display: flex;
  margin: 16px 0px;
  flex-wrap: wrap;
}

.form-row__input 
{
  padding:9px;
  border: none;
  border-radius: 12px;
  background:#e5e5e5;
  font-weight: 500;
  font-size: 20px;
  flex:1;
  min-width: 100px;
}

img 
{
  max-width: 100%;
  border-radius: 0px 0px 20px 20px;
  margin-bottom: 100px;
}

.card 
{
  max-width: 100%;
  width: 900px;
  background:lightskyblue;
  border-radius: 20px;
  padding:32px;
}

.card__title 
{
  text-align:center;
  font-weight: 800;
}

.card__subtitle 
{
  text-align: center;
  color:#787878;
  font-size: 20px;
}

.button 
{
  background: #2196F3;
  color:white;
  border-radius: 12px;
  font-weight: 800;
  font-size: 24px;
  border: none;
  width: 100%;
  padding: 11px;
  transition: .4s background-color;
}

.card__action 
{
  color:#2196F3;
  text-decoration: underline;
}

.card__action:hover 
{
  cursor:pointer;
}

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