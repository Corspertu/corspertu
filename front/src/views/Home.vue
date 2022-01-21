<template>
  <div class="content">
    <div class="banner">
      <h1>
        Votre expertise Pilotage Budgétaire / Organisation / Web pour l'économie
        sociale et solidaire en Corse et PACA
      </h1>
    </div>

    <div class="text">
      L'économie sociale et solidaire est un secteur en perpétuel changement. Il
      doit faire face à des défis toujours plus nombreux. Il doit également se
      <strong>structurer</strong> , développer des expertises plus poussées en <strong>finance, budget et
      pilotage</strong> . L'ESS est enfin un secteur qui a besoin de <strong>communiquer, de
      promouvoir</strong>  des informations sur ses actions. Quoi de mieux que les
      technologies du web pour cela? <br> En tant que consultant je souhaite apporter
      le soutien que méritent ces acteurs. Puisque l'ESS est unique, mes
      solutions doivent l'être aussi. L'ESS a besoin de réponses adaptées,
      personnalisées. Je propose du sur-mesure à des acteurs naturellement
      complexes.
    </div>

    <div class="logo">
      <v-img src="../assets/logo2.png"> </v-img>
    </div>

<div class="timelinePrestations">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :picture="item.picture"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :link="item.link"
        fill-dot
        large
      >
        <v-card :color="item.color" dark>
          <v-img height="75px" :src="item.picture">
            <v-card-title class="text-h5" style="word-break: break-word">
              <div class="titleResponsive">{{ item.title }}</div> 
            </v-card-title>
          </v-img>
          <v-card-text class="white text--primary">
            <p>
              {{ item.text }}
            </p>
            <v-btn :color="item.color" class="mx-0" outlined>
              <router-link
                style="text-decoration: none; color: dark"
                :to="{ name: item.link }"
              >
                En savoir plus
              </router-link>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data: () => ({
    items: [
      {
        color: "indigo lighten-1",
        picture: "../assets/placebusiness.jpg",
        icon: "mdi-charity",
        title:
          "L'expertise budget/web à destination de l'économie sociale et solidaire",
        text: "Le monde de l'ESS nécessite de plus en plus d'expertises. Leur monde est en constante évolution et doit faire face à de nombreux défis. Les acteurs ont besoin d'expertises au niveau du pilotage budgétaire vis à vis de leurs financeurs et afin d'optimiser leur organisation. Les acteurs ont souvent un véritable savoir-faire, mais ont-ils le faire-savoir? Il leur est important de développer leur présence sur internet afin d'étendre leur influence",
        link: "services",
      },
      {
        color: "deep-purple lighten-1",
        icon: "mdi-folder-multiple-plus",
        title: "Des compétences variées et riches à votre service",
        text: "Après 10 ans de contrôle et d'organisation au sein de banques d'affaires j'ai approfondi mes connaissances dans le budget au sein d'administrations. Je suis également titulaire d'un diplôme de développeur web et de gestionnaire paie en plus de celui de l'école de commerce de Toulouse. Engagé dans le monde sportif associatif je connais bien les défis actuels des associations.",
        link: "skills",
      },
      {
        color: "blue-grey lighten-1",
        icon: "mdi-head-cog",
        title: "Un esprit curieux trouvera forcément les bonnes solutions",
        text: "Au cours de toutes mes expériences j'ai pu agir pour le changement et l'amélioration des organisations. Je m'investis toujours avec cette même passion originelle du savoir et à la recherche de solutions.",
        link: "whoami",
      },
      {
        color: "brown lighten-1",
        icon: "mdi-key-variant",
        title: "Des services ouverts à tous tant en Corse qu'en PACA",
        text: "Mon expertise s'applique parfaitement aux sociétés commerciales et aux administrations. Ces prestations peuvent passer via la SASU W.O.C.",
        link: "weborga",
      },
    ],
  }),
};
</script>

<style >
h1 {
  font-weight: bolder;
  color: #3c4b65;
}

h2,
.img {
  text-align: center;
}

.text {
  font-size: 1em;
  margin-left: 10%;
  margin-right: 10%;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

.banner {
  text-align: left;
  background: linear-gradient(
    90deg,
    rgba(101, 126, 171, 67) 0%,
    rgba(131, 164, 222, 87) 65%,
    rgba(202, 212, 227, 89) 100%
  );
  margin-bottom: 1.5em;
  margin-left: 1.7em;
}

.timelinePrestations{
  margin-left:10%;
  margin-right:10%;
}

.content{
  word-break: normal;
}

</style>