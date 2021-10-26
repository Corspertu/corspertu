<template>
  <section class="projectsPage">
   <div class="banner"><h1>Projets</h1></div> 

    
  <div><ProjectThumbnail/></div>
  
  
     
      
  
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
.projectsPage {
  padding-top: 5em;
  padding-bottom: 3em;
  
}


.titleCard {
  font-weight: bolder;
  font-size: 1.3em;
  
}



</style>