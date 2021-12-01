<template>
 
  
    
<v-col xs="12" sm="12" md="6" lg="6" xl="6">
  <v-card  class="cardMargin" style="margin:1em" v-if="posts">
         <v-img
          class="indigo accent--text "
          height="150px"
          v-if="posts._embedded['wp:featuredmedia']"
          :src="posts._embedded['wp:featuredmedia'][0].source_url"
        >
          
        </v-img>
        <v-img
          class="indigo accent--text "
          height="150px"
          v-else
          src="../assets/budgetFinance.jpg"
        >
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em"
        >
        <v-card-title style="word-break: break-word">
            <div class="titleCard">
              {{decoder(posts.title.rendered)}}
            </div>
          </v-card-title>
          <v-html>
             {{decoder(posts.excerpt.rendered)}}
          </v-html>
        </v-card-text>
        <v-btn 
                class="ma-2"
                outlined
                right
                color=#657eab
                v-bind:href="posts.link"
                target="_blank"
                >
          Aller lire l'article

        </v-btn>
     </v-card>

  </v-col>  
    
   
 

</template>


<script>
export default {
  
  props:{
    
    posts: {
      type: Object,
  },
  },
  
  methods: {
   
    
    decoder (str) {
     var textArea = document.createElement('textarea');
      textArea.innerHTML = str;
      
      return textArea.value.replace(/<\/?p[^>]*>/g, "");

     
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
 color: #657eab;
}


</style>
