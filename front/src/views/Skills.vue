<template>
   
<div class="content">

<div class="banner"><h1>Compétences</h1></div>

<v-container>
  <v-layout row wrap>

    <v-flex xs12 sm12 md6 lg6 >
      <v-card class="skillCol">
          <v-app-bar
            dark
            color= #657EAB
          >
      
            <v-toolbar-title>Budget Finance Organisation</v-toolbar-title>

          </v-app-bar>
  
      <v-container>
        <v-row dense>
            
          <v-col
            v-for="(item, i) in itemsFin"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                    style="word-break: break-word"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.text"></v-card-subtitle>
  
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </v-flex>

  <v-flex xs12 sm12 md6 lg6 >
    <v-card class="skillCol">
      <v-app-bar
        dark
        color= #657EAB
      >
  
        <v-toolbar-title>Développement Web</v-toolbar-title>

      </v-app-bar>
  
      <v-container>
        <v-row dense>
            
          <v-col
            v-for="(item, i) in itemsWeb"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                    style="word-break: break-word"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.text"></v-card-subtitle>
  
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </v-flex>

  </v-layout>

</v-container>

  

</div>
  
    
</template>

<script>
export default {
    setup() {
        
    },
    data: () => ({
    itemsFin: [
      {
        color: '#E34B5B',
        src: require('../assets/tbs.png'),
        title: 'Toulouse Business School',
        text: 'Master 2 en finance des entreprises. Recherche en finance.',
      },
      {
        color: '#265196',
        src: require('../assets/asca.jpeg'),
        title: 'Titre professionnel de gestionnaire paie',
        text: '',
      },
      {
        color: '#000',
        src: require('../assets/notion.png'),
        title: 'Notion',
        text: 'Développeur de solutions business, CRM, management de projets',
      },
      {
        color: '#B52F37',
        src: require('../assets/palatine.jpg'),
        title: 'Banque Palatine',
        text: '7 ans dont 4 ans en contrôle des risques et amélioration des contrôles et de la qualité.',
      },
      {
        color: '#1F3661',
        src: require('../assets/rmm.png'),
        title: 'Rothschild Martin Maurel',
        text: '3 ans en contrôle, déontologie, qualité, lutte contre la fraude, rédaction de procédures.',
      },
      {
        color: '#005EA9',
        src: require('../assets/caf.png'),
        title: 'Caisse d\'allocations familiales',
        text: '2 ans responsable du pilotage budgétaire, des ressources humaines et des achats.',
      },
      {
        color: '#E67600',
        src: require('../assets/mtc.jpg'),
        title: 'Marseille Trail Club',
        text: '2 ans trésorier du club.',
      },
      {
        color: '#FF600A',
        src: require('../assets/ifilanci.jpg'),
        title: 'Club de trail I Filanci',
        text: '2 ans trésorier du club.',
      },
    ],

    itemsWeb: [
      {
        color: '#0ABDA2',
        src: require('../assets/oclock.png'),
        title: 'Ecole du Web O\'Clock',
        text: 'Titre professionnel de développeur web et web mobile. Langages maitrisés: HTML, PHP, JS, SQL. Fonctionnalités: POO, Laravel, Parcel, Bootstrap, Composer, API.',
      },
       {
        color: '#207196',
        src: require('../assets/wordpress.png'),
        title: 'Spécialisation Wordpress',
        text: 'Thèmes et plugins custom, API native, sécurité et référencement',
      },
      {
        color: '#32475B',
        src: require('../assets/vuejs.png'),
        title: 'Spécialisation Vue.JS',
        text: 'Vue.JS, Vue router et Vuetify',
      },
      {
        color: '#0000F7',
        src: require('../assets/bubble.png'),
        title: 'Bubble',
        text: 'Création d\'applications mobiles rapides et fiables',
      },
      {
        color: '#264152',
        src: require('../assets/opquast.jpg'),
        title: 'Certificat Qualité Web Opquast',
        text: 'Maitrise de la qualité Web. Score 865/1000',
      },
      {
        color: '#0B4066',
        src: require('../assets/secnum.png'),
        title: 'Certificat de sécurité numérique ANSSI',
        text: '',
      },
      {
        color: '#704EE4',
        src: require('../assets/openclassroom.png'),
        title: 'Certificats Openclassroom',
        text: 'HTML5 et CSS3, Wordpress, charte graphique, community management',
      },
      {
        color: '#4285F4',
        src: require('../assets/google.png'),
        title: 'Google Licence marketing numérique',
        text: '',
      },
    ]
  }),
}
</script>

<style>

.skillCol{
  margin: 2em;
}


</style>