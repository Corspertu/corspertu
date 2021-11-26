<template>
 
  
    
<v-col xs="12" sm="6" md="6" lg="6" xl="6">
  <v-card  class="cardMargin" style="margin:1em" v-if="posts">
         <v-img
          class="indigo accent--text "
          height="150px"
          v-if="posts._embedded['wp:featuredmedia']"
          :src="posts._embedded['wp:featuredmedia'][0].source_url"
        >
          <v-card-title style="word-break: break-word">
            <div class="titleCard">
              {{decoder(posts.title.rendered)}}
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
              {{decoder(posts.title.rendered)}}
            </div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em;"
        >
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
   // DOMParser technically still working draft, but quite well supported. https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
     domDecoder (str) {
     let parser = new DOMParser();
      let dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
      return dom.body.textContent;
    },
    
    decoder (str) {
     var textArea = document.createElement('textarea');
      textArea.innerHTML = str;
      return textArea.value;
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
