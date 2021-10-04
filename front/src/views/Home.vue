<template>
  
  <div id="app">
    
      <v-app id="inspire">
      <v-card class="overflow-hidden">
        <v-row class="mt-6 mb-6 hidden-md-and-down">
          <v-app-bar
          fixed
          color="#3c4b65"
          dark
          shrink-on-scroll
          prominent
          src="../assets/navbar.jpg"
          fade-img-on-scroll
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(163,178,204,.7), rgba(60,75,101,.7)"
            ></v-img>
          </template>
          <v-app-bar-title>
            <h1 style="margin-top: 2em">
              <router-link
                style="text-decoration: none; color: white"
                :to="{ name: 'home' }"
              >
                Cors'pertu
              </router-link>
            </h1>
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>
                <router-link
                  style="text-decoration: none; color: white; font-size: 1.3em"
                  :to="{ name: 'home' }"
                >
                  Accueil
                </router-link></v-tab
              >
              <v-tab
                ><router-link
                  style="text-decoration: none; color: white; font-size: 1.3em"
                  :to="{ name: 'services' }"
                >
                  Offre de services
                </router-link></v-tab
              >
              <v-tab>
                <router-link
                  style="text-decoration: none; color: white; font-size: 1.3em"
                  :to="{ name: 'skills' }"
                >
                  Compétences
                </router-link>
              </v-tab>
              <v-tab>
                <router-link
                  style="text-decoration: none; color: white; font-size: 1.3em"
                  :to="{ name: 'whoami' }"
                >Qui suis-je
                </router-link>
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        </v-row>
<!-- menu middle size and less //-->
        <v-toolbar class="hidden-lg-and-up" style="background-color: rgba(60,75,101,.7)">
            <v-toolbar-title style= "font-weight: bolder; font-size:1.5em">
                Cors'pertu
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                        <v-icon color="purple" large>
                        mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list style="background-color: rgba(101,126,171,.7)">
                    <v-list-item>
                        <v-list-item-title>
                            <router-link style=" text-decoration: none; color: white; font-size: 1.3em" :to="{name: 'home'}">
                                Accueil
                            </router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link style=" text-decoration: none; color: white; font-size: 1.3em" :to="{name: 'services'}">
                                Offre de services
                            </router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link style=" text-decoration: none; color: white; font-size: 1.3em" :to="{name: 'skills'}">
                                Compétences
                            </router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link style=" text-decoration: none; color: white; font-size: 1.3em" :to="{name: 'whoami'}">
                                Qui suis-je?
                            </router-link>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
<!-- end of the navbar //-->

        <div class="content">
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
                <v-img height="75px"
                      :src= "item.picture"
                      >
                  
                
                <v-card-title class="text-h5"> {{item.title}} </v-card-title>
                </v-img>
                <v-card-text class="white text--primary">
                  <p>
                    {{item.text}}
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
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  setup() {},
  data: () => ({
    items: [
      {
        color: 'indigo lighten-1',
        picture: '../assets/placebusiness.jpg',
        icon: 'mdi-charity',
        title: 'L\'expertise budget/web à destination de l\'économie sociale et solidaire',
        text: 'Le monde de l\'ESS nécessite de plus en plus d\'expertises. Leur monde est en constante évolution et doit faire face à de nombreux défis. Les acteurs ont besoin d\'expertises au niveau du pilotage budgétaire vis à vis de leurs financeurs et afin d\'optimiser leur organisation. Les acteurs ont souvent un véritable savoir-faire, mais ont-ils le faire-savoir? Il leur est important de développer leur présence sur internet afin d\'étendre leur influence',
        link:'services',
      },
      {
        color: 'deep-purple lighten-1',
        icon: 'mdi-folder-multiple-plus',
        title: 'Des compétences variées et riches à votre service',
        text: 'Après 10 ans de contrôle et d\'organisation au sein de banques d\'affaires j\'ai approfondi mes connaissances dans le budget au sein d\'administrations. Je suis également titulaire d\'un diplôme de développeur web et de gestionnaire paye en plus de celui de l\'école de commerce de Toulouse. Engagé dans le monde sportif associatif je connais bien les défis actuels des associations.',
        link: 'skills',
      },
      {
        color: 'blue-grey lighten-1',
        icon: 'mdi-head-cog',
        title: 'Un esprit curieux trouvera forcément les bonnes solutions',
        text: 'Au cours de toutes mes expériences j\'ai pu agir pour le changement et l\'amélioration des organisations. Je m\'investis toujours avec cette même passion originelle du savoir et à la recherche de solutions.',
        link: 'whoami',
      },
      {
        color: 'brown lighten-1',
        icon: 'mdi-key-variant',
        title: 'Des services ouverts à tous',
        text: 'Mes services sont destinés en priorité à l\'économie sociale et solidaire. Mais je peux également apporter mon expertise aux sociétés commerciales et administrations. Ces prestations peuvent passer vie la SASU W.O.C. (en cours d\'immatriculation) ',
        link: 'page404'
      },
    ],
  }),

};
</script>

<style >
.content {
  padding-top: 10em;
  background-color: #cad4e3;
}


</style>