<template>
 
   <v-container>
     <v-layout row wrap>
       <v-flex xs12 sm12 md6 lg6 >

  <v-card  class="cardMargin" style="margin:1em" v-if="posts">
         <v-img
          class="indigo accent--text "
          height="150px"
          v-if="posts._embedded['wp:featuredmedia']"
          :src="posts._embedded['wp:featuredmedia'][0].source_url"
        >
          <v-card-title style="word-break: break-word">
            <div class="titleCard">
              {{posts.title.rendered}}
            </div>
          </v-card-title>
        </v-img>
        <v-img
          class="indigo accent--text "
          height="150px"
          v-else
          src="../assets/budgetFinance.jpg"
        >
          <v-card-title style="word-break: break-word">
            <div class="titleCard">
              {{posts.title.rendered}}
            </div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em;"
        >
          <div>
             {{posts.excerpt.rendered}}
          </div>
        </v-card-text>
     </v-card>

    
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


.titleCard{
 font-weight: bold; 
 text-shadow: #3c4b65 0.1em 0.1em 0.2em;
}


</style>
