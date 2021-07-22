<template>
<img src="../assets/icon-left-font.png"> 
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p>{{ dataProfile.pseudo }} {{ dataProfile.email }}</p>
    <div class="form-row">
      <button class="button" type="submit" @click.prevent="deleteProfile">Supprimer mon compte</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

let jwt = require("jsonwebtoken");
export default {
  name: "profile",
 
  data() {
    return {
      token: "",
      error: "",
      userId: "",
      dataProfile: [],
      email: "",
      pseudo: "",
    };
  },
  methods:
   {  
     loadProfile() {
      let token = localStorage.getItem("token");
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      const userId = decodedToken.userId;
    
      axios
        .get("http://localhost:3000/api/auth/profile/" + userId , {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
        
          this.dataProfile = res.data;
        })
        .catch((error) => {
          console.log({ error });
        });
    },    

    deleteProfile() {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("id");
      axios
        .delete("http://localhost:3000/api/auth/profile/" + userId, {
          headers: { Authorization: "Bearer " + token },
        })
        .then(() => {
          alert("Votre compte est supprimé !");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
  mounted() {
    this.loadProfile();
  },
};
</script>

<style scoped>

 
</style>>