<template>
    <section>
        <img src="../assets/logo.png" alt="logo" />
        <ul class="links">
            <li><router-link to="/profile"> Profil</router-link></li>
            <li><a to="/login" v-on:click="Logout()"> Déconnexion</a></li>
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
  components: {
    loadPosts,
    newPost,
    
  },
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

#selection
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 25px;
}

h2
{
  margin-bottom: 10px;
  color: #787878;
  font-size: 1.5em;
}


#file
{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.post
{   
    background-color:lightskyblue;
    margin-bottom: 40px;
    padding: 13px 20px;
    border-radius: 20px;
    max-width: 100%;
    width: 900px;
}

.border
{
  display: flex;
  flex-direction: column;
}

.inputs
{
    border: none;
    border-radius: 20px;
    padding-left: 7px;
}

#commentaires
{
    display: flex;
    flex-direction: column;
    margin: auto;
}

#inputcomm
{
    width: 70%;
    margin-top: 12px;
    height: 52px;
}

#textpost
{
    color: #ffd7d7;
    background: #e5e5e5;
    padding:2% ;
    width: 100%;
    font-size: 1.2em;
    font-family: Arial;
    height: 80px;
    line-height: 50px;
}

label
{
    display: flex;
    margin-bottom: 7px;
    font-size: 1.2em;
    color: #787878; 
}

.btn
{
    width: 150px;
    height: 40px;
    font-size: 1.2em;
    font-weight: bold;
    color: #ffffff;
    background-color: #cecece;
    border-radius: 37px;
    border:none;
    box-shadow: 0px 0px 16px #434343;
    margin-bottom: 2px;
    margin-top: 15px;
    &:hover 
    {
        box-shadow: 0px 0px 30px #434343;
        opacity: 0.85;
    }
}
  
.btn-form
{
    width: 100%;
    margin: 15px 0px;
}

img 
{
  display: flex;
  max-width: 100%;
  border-radius: 0px 0px 20px 20px;
  margin: auto;
  margin-bottom: 40px;
}

.fa-edit, .fa-trash
{
    margin-left: 10px;
    margin-top: 20px;
    font-size: 1.5em;
    color: blueviolet;
    &:hover{
        color: #ffd7d7;
    }
}

.text
{
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 1.1em;
    line-height: 1.5em;
    letter-spacing: 0.02em;
    border-bottom: 2px rgba(255, 255, 255, 0.1) solid;
}

.like
{
    padding: 10px;
    border: 3px solid coral;
    border-radius: 20px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 10px;
}

form a 
{
    cursor: pointer;
}

form
{
    width: 70%;
}

@media screen and (min-width:768px){

    .btn
    {
        margin-top: 0px;
    }

}
</style>