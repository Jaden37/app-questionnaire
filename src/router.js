import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import de ma view 14/10/2019
import Questionnaire from './views/Questionnaire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      // définition de la route de ma view 14/10/2019
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    }
  ]
})
