<template>
  <div class="projectsPage">
   <div class="banner"><h1>Projets</h1></div> 
    <div class="flexProject">
      <v-card id="contactCard" class="mx-auto" max-width="40%">
        <v-img
          class="white--text align-end"
          height="150px"
          src="../assets/raspberry.jpg"
        >
          <v-card-title
            ><div class="titleCard">Lutte contre la fracture numérique</div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em"
        >
          <div>
            L'objectif est d'équiper des familles coupées du numérique qui ne
            peuvent accéder à leurs droits. En utilisant la technologie
            Raspberry, il est possible de fournir un ordinateur fonctionnel pour
            120€ comprenant ordinateur, OS, clavier et branchement sur la
            télévision. A cela il est possible d'ajouter une formation destinée
            à des utilisateurs débutants. Le projet est en phase de prototypage.
          </div>
        </v-card-text>
      </v-card>

      <v-card id="contactCard" class="mx-auto" max-width="40%">
        <v-img
          class="white--text align-end"
          height="150px"
          src="../assets/budget.jpg"
        >
          <v-card-title
            ><div class="titleCard">Comptabilité/Budget pour associations</div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em"
        >
          <div>
            Outil complet de comptabilité pour associations: pointage des
            comptes, contrôles de caisses et de soldes, comptabilité par
            engagement, présentation des résultats en compte de résultat, par
            engagements, format collectivité, suivi de projets, outil de
            facturation, notes de frais. Le projet est en phase de déploiement
            par lot.
          </div>
        </v-card-text>
      </v-card>
      <v-card id="contactCard" class="mx-auto" max-width="40%">
        <v-img
          class="white--text align-end"
          height="150px"
          src="../assets/villageCorse.jpg"
        >
          <v-card-title
            ><div class="titleCard">
              Des sites abordables et adaptés aux petites mairies
            </div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em"
        >
          <div>
            L'objectif est de réaliser le site le moins cher possible tout en
            restant personnalisé et original. A l'aide de la technologie offerte
            par WordPress, je propose une matrice de site web adapté aux mairies
            qui souhaitent garder le contact avec leurs administrés où qu'ils
            soient. Le site dispose en plus des rubriques habituelles un flux
            d'actualité que même un non programmeur peut animer.
          </div>
        </v-card-text>
      </v-card>
      <v-card id="contactCard" class="mx-auto" max-width="40%">
        <v-img
          class="white--text align-end"
          height="150px"
          src="../assets/placebusiness.jpg"
        >
          <v-card-title
            ><div class="titleCard">
              Des outils de planification et d'organisation pour tous
            </div>
          </v-card-title>
        </v-img>

        <v-card-text
          class="text--primary"
          style="font-size: 1em; margin-top: 1em"
        >
          <div>
            Le web propose aujourd'hui des outils de planification et de travail
            en équipe qui étaient autrefois réservés aux grandes entreprises. La
            plupart de ces solutions sont gratuites. Vous pouvez améliorer le
            suivi de vos projets, listes des taches, planification du travail
            des équipes, gestion clients et partenaires... La solution à vos besoins existe.
          </div>
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
  padding-top: 5em;
  padding-bottom: 3em;
}
#contactCard {
  margin-bottom: 2em;
}





.titleCard {
  font-weight: bolder;
  font-size: 1.3em;
}

.flexProject {
  display: flex;
  flex-wrap: wrap;
}
</style>