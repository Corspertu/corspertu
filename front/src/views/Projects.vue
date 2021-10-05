<template>
  <div class="projectsPage">
    <h1>Projets</h1>
<div class="flexProject">
<v-card id="contactCard" class="mx-auto" max-width=40%>
      <v-img
        class="white--text align-end"
        height="150px"
        src="../assets/raspberry.jpg"
      >
        <v-card-title><div class="titleCard">Lutte contre la fracture numérique</div> </v-card-title>
      </v-img>

      <v-card-text class="text--primary" style="font-size: 1em; margin-top: 1em">
        <div>L'objectif est d'équiper des familles coupées du numérique qui ne peuvent accéder à leurs droits. En utilisant la technologie Raspberry, il est possible de fournir un ordinateur fonctionnel pour 120€ comprenant ordinateur, OS, clavier et branchement sur la télévision. A cela il est possible d'ajouter une formation destinée à des utilisateurs débutants. Le projet est en phase de prototypage.</div>
      </v-card-text>

    </v-card>

<v-card id="contactCard" class="mx-auto" max-width=40%>
      <v-img
        class="white--text align-end"
        height="150px"
        src="../assets/budget.jpg"
      >
        <v-card-title><div class="titleCard">Comptabilité/Budget pour associations</div> </v-card-title>
      </v-img>

      <v-card-text class="text--primary" style="font-size: 1em; margin-top: 1em">
        <div>Outil complet de comptabilité pour associations: pointage des comptes, contrôles de caisses et de soldes, comptabilité par engagement, présentation des résultats en compte de résultat, par engagements, format collectivité, suivi de projets, outil de facturation, notes de frais. Le projet est en phase de déploiement par lot.</div>
      </v-card-text>

    </v-card>
   </div>
  </div>
</template>

<script>
export default {
  setup() {},
  
};
</script>

<style>
.projectsPage {
  padding-top: 3em;
  padding-bottom: 3em;
}
#contactCard{
  margin-bottom: 2em;
}

h1,
h2,
.img {
 
  text-align: center;
 
}

h1 {

  font-weight: bolder;
  color: #3c4b65;
}

.titleCard{
  font-weight: bolder;
  font-size: 1.3em;
}

.flexproject{
  display: flex;
}
</style>