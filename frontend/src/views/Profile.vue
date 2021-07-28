<template>
<img class="profile" src="../assets/icon-left-font.png"> 
  <div class="card profile-card">
    <h1 class="card__title">Espace Perso</h1>
    <router-link to="/forum" style="display: inline-block;text-decoration:none;font-size: 1.5em">Retour</router-link>
    <p>{{ dataProfile.pseudo }} {{ dataProfile.email }}</p>
    <div class="form-row">
      <button class="button" type="submit" @click.prevent="deleteProfile">Supprimer mon compte</button>
    </div>
       <h4>Tous mes messages</h4>
    <div class="my-posts">
      <div class="my-post" v-for="myPost in postsProfile" :key="myPost.id">
        <h3>{{ myPost.title }}</h3>
        <img :src="myPost.image" :alt="myPost.image" v-if="myPost.image != null"/><br />
        <p>{{ myPost.content }}</p>
        <deletePost :id="myPost.id" />
      </div>
    </div>
  </div>
</template>

<script>

import deletePost from "../components/deletePost.vue";
import axios from "axios";

let jwt = require("jsonwebtoken");

export default {
  name: "profile",
   components: {
    deletePost,
  },
 
  data() {
    return {
      token: "",
      error: "",
      userId: "",
      dataProfile: [],
      postsProfile: [],
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
      console.log(userId);
    
      axios
        .get("http://localhost:3000/api/auth/profile/" + userId , {
          headers: { Authorization: token },
        })
        .then((res) => {
        
          this.dataProfile = res.data;
        })
        .catch((error) => {
          console.log({ error });
        });
    },    

     loadPostsProfile() {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("id");
      axios
        .get("http://localhost:3000/api/auth/profile/" + userId + "/posts", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.postsProfile = res.data;
        })
        .catch((error) => {
          console.log({ error });
        });
    },

    deleteProfile() {
      let token = localStorage.getItem("token");
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      const userId = decodedToken.userId;
      console.log(userId);
      axios
        .delete("http://localhost:3000/api/auth/profile/" + userId , {
          headers: { Authorization: "Bearer" + token },
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
    this.loadPostsProfile();
  },
};
</script>

<style scoped>
h4
{
  font-size:1.5em;
}

.profile-card
{
  background:#A7A6A3;
}

.profile
{
  margin-bottom:45px;
}

.my-posts 
{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-bottom: 20px;
  
}

.my-post 
{
  background-color: #192a48;
  color: white;
  font-size: 1.4em;
  margin: 15px;
  padding: 10px;
  opacity: 0.8;
  text-align: center;
  border-radius:20px;
}

.error 
{
  font-size: 13px;
  background-color: rgb(231, 185, 185);
  color: rgb(53, 21, 21);
  margin-top: 30px;
  padding: 10px;
}

</style>