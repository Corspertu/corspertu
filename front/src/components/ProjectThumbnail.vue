<template>
 
   <v-container>
     <v-layout row wrap>
       <v-flex xs12 sm12 md6 lg6 v-for="(item, i) in items"
        :key="i">
 
      <v-card  class="cardMargin" style="margin:1em">
         <v-img
          class="white--text "
          height="150px"
          
          :src="item.picture"
        >
          
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em;"
        >
        <v-card-title style="word-break: break-word">
            <div class="titleCard">
              {{item.title}}
            </div>
          </v-card-title>
          <div>
            {{item.text}}
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
  data: () => ({
    items: [
      {
        title: "Lutte contre la fracture numérique",
        picture: require("../assets/raspberry.jpg"),
        text:"L'objectif est d'équiper des familles coupées du numérique qui ne peuvent accéder à leurs droits. En utilisant la technologie Raspberry, il est possible de fournir un ordinateur fonctionnel pour 120€ comprenant ordinateur, OS, clavier et branchement sur la télévision. A cela il est possible d'ajouter une formation destinée à des utilisateurs débutants. Le projet est en phase de prototypage.",
      },
      {
        title: "Organisation administrative et comptable pour associations",
        picture: require("../assets/budget.jpg"),
        text: "Outil complet de gestion pour associations: une page internet personnalisée d'accueil, un drive pour les données sensibles, un outil comptable complet.",
      },
      {
        title: "Des sites abordables et adaptés aux petites mairies",
        picture: require("../assets/villageCorse.jpg"),
        text:"L'objectif est de réaliser le site le moins cher possible tout en restant personnalisé et original. A l'aide de la technologie offerte par WordPress, je propose une matrice de site web adapté aux mairies qui souhaitent garder le contact avec leurs administrés où qu'ils soient. Le site dispose en plus des rubriques habituelles un flux d'actualité que même un non-programmeur peut animer.",
      },
      {
        title: "Des outils de planification et d'organisation pour tous",
        picture: require("../assets/placebusiness.jpg"),
        text: "Le web propose aujourd'hui des outils de planification et de travail en équipe qui étaient autrefois réservés aux grandes entreprises. La plupart de ces solutions sont gratuites. Vous pouvez améliorer le suivi de vos projets, listes des taches, planification du travail des équipes, gestion clients et partenaires... La solution à vos besoins existe.",
      }
    ],
  }),
};

</script>

<style>

.cardMargin{
  margin: 2em;
}





</style>
