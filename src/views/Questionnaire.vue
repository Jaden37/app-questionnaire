<template>
  <!-- Création de mon question avec mes layout 14/10/2019-->
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <!-- Utilisation  des mes components passage en paramètres des questions et réponses 14/10/2019-->
      <div class="md-layout-item">
        <!-- Envoie de l'objet question en fonction de l'index courant 15/10/2019 -->
        <Question :JPquestion="Questions[index]" />
        <router-link to="/questionnaire">
          <!-- bouton utilisant la fonction nextQuestion 15/10/2019 -->
          <md-button v-on:click="nextQuestion">Question suivante</md-button>
        </router-link>
      </div>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>
// importation de mon component 14/10/2019
import Question from '@/components/Question.vue'
export default {
  name: 'questionnaire',
  data: () => ({
    index: 0,
    Questions: [
      {
        name: 'Aimez vous les carottes ?',
        answers: ['Oh oui', 'Moyen', 'Pas du tout'],
        response: {
          1: true
        }
      },
      {
        name: '1 + 2 * 2 ?',
        answers: ['4', '5', 'Oh non pas des maths'],
        response: {
          5: true
        }
      }
    ]
  }),
  // ajout de mon component dans la liste 14/10/2019
  components: {
    Question
  },
  methods: {
    // fonction qui permet de passer à la question suivante en incrémentant l'index
    nextQuestion: function (event) {
      var length = Object.keys(this.Questions).length
      if (this.index < length - 1) {
        this.index++
      } else {
        alert('Fin du questionnaire')
      }
    }
  }
}
</script>
