<template>
  <div class="content">
    <div class="banner"><h1>Contact</h1></div>
    <v-card id="contactCard" class="mx-auto" max-width="800">
      <v-img
        class="white--text align-end"
        height="250px"
        src="../assets/feu.jpg"
      >
        <v-card-title>Cors'pertu Arnaud Bascou</v-card-title>
      </v-img>

      <v-card-text class="text--primary" style="font-size: 1em; margin-top: 1em">
        <div><v-icon> mdi-phone</v-icon> Téléphone: 06.20.59.02.94</div>
        <div><v-icon> mdi-email</v-icon> contact@corspertu.corsica</div>
        <div>
          <v-icon> mdi-crosshairs-gps</v-icon> Res. Les Cimes Bat. 4 Route
          inférieure de Cardo 20200 Bastia
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d733.1176701770102!2d9.436453982534685!3d42.693753541906595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d42.6942405!2d9.4364017!4m0!5e0!3m2!1sfr!2sfr!4v1633364801139!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style="border: 0 ; margin-top:2em; text-align:center"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-card-text>

      <v-card-actions style="text-align: right">
        <v-btn color=#3c4b65 text> <a href="mailto:contact@corspertu.corsica">Envoyer un mail</a>  </v-btn>

      </v-card-actions>
    </v-card>

   
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>


  

#contactCard{
  margin-bottom: 1em;
}





</style>