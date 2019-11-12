import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/vue-material.min.css'

import VueCookies from 'vue-cookies'
// Ajout de PouchDB au projet 07/11/2019
import PouchDB from 'pouchdb'
// Ajout des cookies dans VueJS 10/11/2019
Vue.use(VueCookies)
// set default config
// VueCookies.config('7d')

Vue.prototype.$JPdb = new PouchDB('JPdatabase')

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
