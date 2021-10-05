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
        src: require('../assets/budgetFinance.jpg'),
        title: 'Budget Finance',
        text: 'Expertise dans le pilotage budgétaire, comptabilité analytique, comptabilité d\'engagement. Je peux construire la solution adapté à vos besoins et à ceux de vos financeurs.'
        },
        {src: require('../assets/devWeb.jpg'),
        title: 'Développement Web',
        text:'Création de sites Web: sites vitrines, blog, fils d\'actualité, intranet pour vos membres, stratégie web.'
        },
        {src: require('../assets/orgaControle.jpg'),
        title: 'Organisation Qualité Contrôle',
        text:'Création de procédures, contrôle de processus, optimisation des organisations.'
        },
      ],
      

  }
     },
}
</script>

<style>
.servicesPage {
    padding-top: 3em;
    padding-bottom: 3em;
}
</style>