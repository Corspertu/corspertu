<template>
    <footer>
<v-toolbar
      color="#3c4b65"
      dark
    >
      <v-toolbar-title> 
          <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'home' }"
                >
                  Accueil
                </router-link></v-toolbar-title>
  
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
  
      <span class="subheading">
           <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'contact' }"
                >
                  Me contacter
                </router-link></span>
       <v-divider
        class="mx-4"
        vertical
      ></v-divider>          
      <span class="subheading">
           <router-link
                  style="text-decoration: none; color: white"
                  :to="{ name: 'legal' }"
                >
                  Mentions légales
                </router-link></span>           
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
        <v-icon> mdi-linkedin</v-icon>
         <a href="https://www.linkedin.com/in/arnaud-bascou-41055b49/" target="_blank" style="text-decoration: none; color: white">LinkedIn</a>
                
        </v-btn>
  
        <v-divider vertical></v-divider>
  
        <v-btn text>
        <v-icon> mdi-github</v-icon>
         <a href="https://github.com/Corspertu" target="_blank" style="text-decoration: none; color: white">Github</a>
                
        </v-btn>
  
        <v-divider vertical></v-divider>
  
       <v-btn text>
        <v-icon> mdi-school</v-icon>
         <a href="https://www.canva.com/design/DAEqjEazkrY/Bcma9_m4UiBxQ3poBMU0nQ/view?utm_content=DAEqjEazkrY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" style="text-decoration: none; color: white">Mon CV</a>
                
        </v-btn>
  
        <v-divider vertical></v-divider>
      </v-toolbar-items>
  
    </v-toolbar>

    </footer>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>
<style>
</style>