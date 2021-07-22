<template>
  <router-view />
</template>



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

.button {
    background: #2196F3;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }
</style>