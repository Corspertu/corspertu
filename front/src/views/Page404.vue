<template>
   <div class="pageLost">
 
<div class="banner"><h1>Page 404</h1></div>

<h2>La page que vous cherchez n'existe pas ou n'a pas encore été créée</h2>
<h2><router-link
                  style="text-decoration: none; color: dark"
                  :to="{ name: '/' }"
                >
                  Retour vers l'accueil
                </router-link></h2>

  </div>
   

    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
.pageLost {
    background-image: url("../assets/logo.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 800px;
    padding-top: 4em;
}

h2{
  text-align: center;
  padding: 5px;
}


</style>