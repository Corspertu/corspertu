<template>
<v-app>
   
   <router-view :key="$route.fullPath"/>
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
