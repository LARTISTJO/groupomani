<template>
  <img src="../assets/icon-left-font.png"> 
    <div class="card">
      <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
      <h1 class="card__title" v-else>Inscription</h1>
      <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
      <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
      <div class="form-row">
        <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail"/>
      </div>
      <div class="form-row" v-if="mode == 'create'">
        <input v-model="pseudo" class="form-row__input" type="text" placeholder="Pseudo"/>
      </div>
      <div class="form-row">
        <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
        Adresse mail et/ou mot de passe invalide
      </div>
      <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
        Adresse mail déjà utilisée
      </div>
      <div class="form-row">
        <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
          <span v-if="status == 'loading'">Connexion en cours...</span>
          <span v-else>Connexion</span>
        </button>
        <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
          <span v-if="status == 'loading'">Création en cours...</span>
          <span v-else>Créer mon compte</span>
        </button>
      </div>
    </div>
    <router-link to="/Home">home</router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data: function () {
    return {
      mode: 'login',
      email: '',
      pseudo: '',
      password: '',
    }
  },
  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push('/profile');
      return ;
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.pseudo != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(['status'])
  },
  methods: {
    switchToCreateAccount: function () {
      this.mode = 'create';
    },
    switchToLogin: function () {
      this.mode = 'login';
    },
    login: function () {
      const self = this;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      }).then(function () {
        self.$router.push('/profile');
      }, function (error) {
        console.log(error);
      })
    },
    createAccount: function () {
      const self = this;
      this.$store.dispatch('createAccount', {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password,
      }).then(function () {
        self.login();
      }, function (error) {
        console.log(error);
      })
    },
  }
}
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