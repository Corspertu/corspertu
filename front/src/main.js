import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

// configuration of router
const router = new VueRouter({
  //router qui gère l'historique
  mode: 'history',
  // racine du site front
  base: '/',

  // configuration of routes
  routes: [
    // every route is an object
    
    {
      name: 'home', // name of the route
      path: '/', // matching url
      component: Home // show this component when the route is checked
    },
    {
      name: 'services', // name of the route
      path: '/services', // matching url
      component: Services // show this component when the route is checked
    },

    {
      name: 'skills', // name of the route
      path: '/skills', // matching url
      component: Skills // show this component when the route is checked
    },

    {
      name: 'whoami', // name of the route
      path: '/whoami', // matching url
      component: Whoami // show this component when the route is checked
    },

    
  ]

});

// components used by the router
// NOT FORGET to import views's components, if not show
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Skills from './views/Skills.vue';
import Whoami from './views/Whoami.vue';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
