<template>
   <div class="bgc">
 

<h1>Page 404</h1>
<h2>La page que vous cherchez n'existe pas ou n'a pas encore été créée</h2>
<h2><router-link
                  style="text-decoration: none; color: dark"
                  :to="{ name: '/' }"
                >
                  Retour ver l'accueil
                </router-link></h2>
<div class="img">
  <v-img src="../assets/logo.png">
  
</v-img>
  </div>
   
 </div>
    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
.bgc {
    background-color: #9b9aa3;
}

h1,h2,.img {
  text-align: center;
  padding: 5px;
}

h1{
  margin-top: 1em;
  font-weight: bolder;
  color: #3c4b65;
}
</style>