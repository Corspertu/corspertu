<template>

<v-app>
   <v-card class="overflow-hidden">
        <v-row class="mt-6 mb-6 hidden-md-and-down">
          <v-app-bar
            fixed
            color="#3c4b65"
            dark
            shrink-on-scroll
            prominent
            src="./assets/navbar.jpg"
            fade-img-on-scroll
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(163,178,204,.7), rgba(60,75,101,.7)"
              ></v-img>
            </template>
            <v-app-bar-title>
              <h2 style="padding-top: 1.2em">
                <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'home' }"
                >
                  Cor'Spertu
                </router-link>
              </h2>
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
              <v-tabs align-with-title>
                <v-tab>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'home' }"
                  >
                    Accueil
                  </router-link></v-tab
                >
                <v-tab
                  ><router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'services' }"
                  >
                    Offre de services
                  </router-link></v-tab
                >
                <v-tab>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'skills' }"
                  >
                    Compétences
                  </router-link>
                </v-tab>
                <v-tab>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'whoami' }"
                    >Qui suis-je
                  </router-link>
                </v-tab>
                <v-tab>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'projects' }"
                    >Projets
                  </router-link>
                </v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
        </v-row>
        <!-- menu middle size and less //-->
        <v-toolbar
          class="hidden-lg-and-up"
          style="background-color: rgba(60, 75, 101, 0.7)"
        >
          <v-toolbar-title style="font-weight: bolder; font-size: 1.2em">
            Cors'pertu
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon color="purple" large> mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list style="background-color: rgba(101, 126, 171, 0.7)">
              <v-list-item>
                <v-list-item-title>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'home' }"
                  >
                    Accueil
                  </router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'services' }"
                  >
                    Offre de services
                  </router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'skills' }"
                  >
                    Compétences
                  </router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'whoami' }"
                  >
                    Qui suis-je?
                  </router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link
                    style="
                      text-decoration: none;
                      color: white;
                    "
                    :to="{ name: 'projects' }"
                  >
                    Projets
                  </router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <!-- end of the navbar //-->

        
      </v-card>
  <div class="content">
    <router-view :key="$route.fullPath"/>
  
  </div> 
   <Footer></Footer>
</v-app>

</template>

<script>

import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
   
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.content{
   padding-top: 7em;
  background-color: #cad4e3;
}
</style>
