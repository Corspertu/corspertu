<template>
 
  
  <div  style=" display:flex; flex-direction:row; flex-wrap:wrap; justify-content: space-between">
    <v-row  v-for="(item, i) in items"
        :key="i" >
      
      <v-card  id="contactCard" class="mx-auto" max-width="800" style="margin:1em">
         <v-img
          class="white--text "
          height="150px"
          
          :src="item.picture"
        >
          <v-card-title>
            <div class="titleCard">
              {{item.title}}
            </div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em;"
        >
          <div>
            {{item.text}}
          </div>
        </v-card-text>
     </v-card>
     
      </v-row> 
      </div>
 
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
        title: "Comptabilité/Budget pour associations",
        picture: require("../assets/budget.jpg"),
        text: "Outil complet de comptabilité pour associations: pointage des comptes, contrôles de caisses et de soldes, comptabilité par engagement, présentation des résultats en compte de résultat, par engagements, présentation des comptes au format demandé par les collectivités, suivi de projets, outil de facturation, notes de frais. Le projet est en phase de déploiement par lot.",
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

