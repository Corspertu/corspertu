<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="overflow-hidden">
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
                  style="text-decoration: none; color: white"
                  :to="{ name: 'home' }"
                >
                  Home
                </router-link></v-tab
              >
              <v-tab
                ><router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'services' }"
                >
                  Offre de services
                </router-link></v-tab
              >
              <v-tab>
                <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'skills' }"
                >
                  Compétences
                </router-link>
              </v-tab>
              <v-tab>
                <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'whoami' }"
                >En savoir plus
                </router-link>
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

<!-- end of the navbar //-->

        <div class="content">
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              :title="item.title"
              :text="item.text"
              :link="item.link"
              fill-dot
            >
              <v-card :color="item.color" dark>
                <v-card-title class="text-h6"> {{item.title}} </v-card-title>
                <v-card-text class="white text--primary">
                  <p>
                    {{item.text}}
                  </p>
                  <v-btn :color="item.color" class="mx-0" outlined>
                    <router-link
                  style="text-decoration: none; color: dark"
                  :to="{ name: item.link }"
                >
                  Qui suis-je?
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
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: 'salut',
        text: 'hey les poneys',
        link:'skills',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),

};
</script>

<style>
.content {
  margin-top: 10em;
  padding-top: 5em;
  background-color: #9b9aa3;
}
</style>