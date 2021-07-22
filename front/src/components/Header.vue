<template>
    <header>
<div id="app">
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#3c4b65"
        dark
        shrink-on-scroll
        prominent
        src="../assets/navbar.jpg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(163,178,204,.7), rgba(60,75,101,.7)"
          ></v-img>
        </template>
  
  
        <v-app-bar-title > <h1>Cor'Spertu</h1> </v-app-bar-title>

        <v-spacer></v-spacer>
  
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab> La société</v-tab>
            <v-tab>Offe de services</v-tab>
            <v-tab>
              <router-link :to="{name: 'team'}">
                           L'équipe
              </router-link>
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600px"
      >
        <v-container style="height: 1500px;"></v-container>
      </v-sheet>
    </v-card>
  </v-app>
</div>

    </header>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>