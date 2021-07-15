<template>
  <router-view></router-view>
  <router-link to="/Profile">profil</router-link>
  <router-link to="/Home">home</router-link>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* 
{
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app 
{
  max-width: 100%;
}

body 
{
  background-image: linear-gradient(to bottom right, #FBAB7E, #F7CE68);
  display: flex;
  justify-content: center;
  padding: 0% 5%;
  min-height: 100vh;
}

</style>