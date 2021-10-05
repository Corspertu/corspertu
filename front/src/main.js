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

    {
      name: 'page404', // name of the route
      path: '/page404', // matching url
      component: Page404 // show this component when the route is checked
    },

    {
      name: 'contact', // name of the route
      path: '/contact', // matching url
      component: Contact // show this component when the route is checked
    },

    {
      name: 'legal', // name of the route
      path: '/legal', // matching url
      component: Legal // show this component when the route is checked
    },
    {
      name: 'projects', // name of the route
      path: '/projects', // matching url
      component: Projects // show this component when the route is checked
    },
    
  ]

});

// components used by the router
// NOT FORGET to import views's components, if not show
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Skills from './views/Skills.vue';
import Whoami from './views/Whoami.vue';
import Page404 from './views/Page404.vue';
import Contact from './views/Contact.vue';
import Legal from './views/Legal.vue';
import Projects from './views/Projects.vue';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
