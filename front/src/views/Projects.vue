<template>
  <section class="content">
   <div class="banner"><h1>Projets</h1></div> 

    
  <div><ProjectThumbnail/></div>
  
  
     
      
   <div class="spacerBottom"></div>
  </section>
 

</template>

<script>

import ProjectThumbnail from "../components/ProjectThumbnail.vue"

export default {
  components: {
      ProjectThumbnail,
    },
  
  
};

</script>

<style>



.titleCard {
  font-weight: bolder;
  font-size: 1.3em;
  
}



</style>