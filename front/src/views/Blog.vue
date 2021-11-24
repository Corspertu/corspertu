<template>
  <section class="content">
   <div class="banner"><h1>Les dernières actualités</h1></div> 

    
  <v-row><BlogThumbnail
          v-for="currentPost in posts"
          :key="currentPost.id"
          :posts="currentPost"
  
  /></v-row>
  
  
     
      
   <div class="spacerBottom"></div>
  </section>
 

</template>

<script>

import BlogThumbnail from "../components/BlogThumbnail.vue"
import blogService from '../services/blogService.js';

export default {
  components: {
      BlogThumbnail,
    },
  
  created() {
      blogService.getPosts().then((posts) => {
          this.posts = posts;
      });
  },

  data: function() {
      return {
          posts: [
              
          ]
      }
  },

  props: [
    'title',
    'id',
    'excerpt'
  ],
  
};

</script>

<style>







</style>