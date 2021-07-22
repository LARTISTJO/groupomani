<template>
    <section>
        <img src="../assets/logo.png" alt="logo" />
        <ul class="links">
            <li><router-link to="/profile"> Profil</router-link></li>
            <li><router-link to="/login" v-on:click="Logout()"> Déconnexion</router-link></li>
        </ul>
        <h2>Accueil</h2>
        <div>
            <newPost />
        </div>
        <div>
            <loadPosts />
        </div>
    </section>
    
</template>

<script>

import loadPosts from "../components/loadPosts.vue";
import newPost from "../components/newPost.vue";

export default {
  name: "forum",
  components: { loadPosts, newPost, },
  data() {
    return {
      token: "",
      allPosts: [],
    };
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">

h2
{
  margin-bottom: 10px;
  color: #787878;
  font-size: 1.5em;
}

img 
{
  display: flex;
  max-width: 100%;
  border-radius: 0px 0px 20px 20px;
  margin: auto;
  margin-bottom: 40px;
}
</style>
