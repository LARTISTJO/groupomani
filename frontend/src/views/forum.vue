<template>
    <section>
        <img src="../assets/icon-left-font.png" alt="logo" />
        <ul class="links">
            <li><router-link to="/profile" style="display: inline-block;text-decoration:none;"> Profil</router-link></li>
            <li><router-link to="/login" v-on:click="Logout()" style="display: inline-block;text-decoration:none;"> Déconnexion</router-link></li>
        </ul>
        <h2>Accueil</h2>
        <div class= center>
            <newPost />
        </div>
        <div class = center>
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

img 
{
  display: flex;
  max-width: 100%;
  border-radius: 0px 0px 20px 20px;
  margin: auto;
  margin-bottom: 40px;
}

.links
{
  list-style-type: none;
  font-size: 1.3em;
  font-weight: 700;
}

router-link
{
  text-decoration:none;
}
</style>
