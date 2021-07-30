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

.one-post
{
  margin-bottom: 20px;
}

h2,h1
{
  margin-bottom: 10px;
  color: #192A48;
  font-size: 1.5em;
}

body 
{
  background-image: linear-gradient(to bottom right, #C9535C, #B8B9B9);
  display: flex;
  justify-content: center;
  padding: 0% 5%;
  min-height: 100vh;
}

.button 
{
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
  margin-bottom: 10px;
}

.content
{
  display: flex;
}
.card 
{
  max-width: 100%;
  width: 900px;
  background:#112140;
  border-radius: 20px;
  padding:32px;
}

.card__title 
{
  text-align:center;
  font-weight: 800;
  color: #A7A6A3;
}

.card__subtitle 
{
  text-align: center;
  color:#A7A6A3;
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

</style>