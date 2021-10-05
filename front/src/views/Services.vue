<template>
  <div class="servicesPage">
    <h1>Offre de services</h1>

    <v-carousel hide-delimiters style="height: 100%">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-jumbotron dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h3 class="display-3">{{ item.title }}</h3>
                <span class="subheading">{{ item.text }}</span>
                <br>
                <span class="subheading">{{ item.list }}</span>
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
  setup() {},
  data() {
    return {
      items: [
        {
          src: require("../assets/budgetFinance.jpg"),
          title: "Budget Finance",
          text: "Expertise dans le pilotage budgétaire, comptabilité analytique, comptabilité d'engagement. Je peux construire la solution adapté à vos besoins et à ceux de vos financeurs.",
          list: "Je peux vous fournir les outils de suivi budgétaire de vos projets, une comptabilité associative simplifiée, des états budgétaires au format demandé par les collectivités, un facturier, ou une gestion simplifiée de vos adhésions."
        },
        {
          src: require("../assets/devWeb.jpg"),
          title: "Développement Web",
          text: "Création de sites Web: sites vitrines, blog, fils d'actualité, intranet pour vos membres, stratégie web.",
          list: "Je peux répondre à toutes vos problématiques web, de l'intégration en passant par la charte graphique pour finir sur la mise en ligne et la maintenance de votre site web. Je peux fournir un accès back-office permettant à un non-professionnel d'ajouter des informations sur son site web."
        },
        {
          src: require("../assets/orgaControle.jpg"),
          title: "Organisation Qualité Contrôle",
          text: "Création de procédures, contrôle de processus, optimisation des organisations.",
          list: "Je peux vous accompagner dans la recherche de la qualité dans votre organisation. Je peux également optimiser les processus, éviter les doublons et les redondances qui polluent le quotidien. La perte de temps et de qualité sont parmi les couts cachés les plus dangereux dans les organisations. Et pourtant ils sont trop souvent négligés."
        },
      ],
    };
  },
};
</script>

<style>
.servicesPage {
  padding-top: 3em;
  padding-bottom: 3em;
}
</style>