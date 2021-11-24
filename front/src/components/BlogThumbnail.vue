<template>
 
   <v-container>
     <v-layout row wrap>
       <v-flex xs12 sm12 md6 lg6 >
 
      <article v-if="posts">
         
          <v-card-title style="word-break: break-word">
            
              {{posts.title.rendered}}

          </v-card-title>
       <v-img
                    v-if="posts._embedded['wp:featuredmedia']"
                    :src="posts._embedded['wp:featuredmedia'][0].source_url"
                    height="200px"
                >
                </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em;"
        >
          
            {{posts.excerpt.rendered}}

        </v-card-text>
     </article>
    
       </v-flex>
 
     </v-layout>
   </v-container>
 

</template>


<script>
export default {
  setup() {},
  props:{
    posts:{
      type: Object,
    }
  },
  
  
};

</script>

<style>

.cardMargin{
  margin: 2em;
}





</style>
