<template>
   <div class="servicesPage">
 

<h1>Offre de services</h1>

 <v-carousel
      hide-delimiters
      style="height: 100%"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
       <v-jumbotron dark>
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <h3 class="display-3">{{ item.title }}</h3>
                  <span class="subheading">{{ item.text }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron> 
      </v-carousel-item>
    
    
     </v-carousel>

   </div>
   
   
    
</template>

<script>

export default {
    setup() {
        
    },
     data () {
    return {
      items: [
        {
        src: '../assets/placebusiness.jpg',
        title: 'titre 1',
        text: 'texte1'
        },
        {src: '../assets/feu.jpg',
        title: 'titre 2',
        text:'texte 2'
        },
      ],
      

  }
     },
}
</script>

<style>
.servicesPage {
    padding-top: 5em;
}
</style>