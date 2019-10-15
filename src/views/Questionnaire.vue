<template>
  <!-- Création de mon question avec mes layout 14/10/2019-->
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <!-- Utilisation  des mes components passage en paramètres des questions et réponses 14/10/2019-->
      <div class="md-layout-item">
        <!-- Envoie de l'objet question en fonction de l'index courant 15/10/2019 -->
        <!-- Ajout de la fonction l'émit du component 15/10/2019 -->
        <Question :JPquestion="JPQuestions[index]" @responseToQuestionnaire="saveUserResponse"/>
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
    // Création de la liste des questions 15/10/2019
    JPQuestions: [
      {
        name: 'Aimez vous les carottes ?',
        answers: ['Oh oui', 'Moyen', 'Pas du tout'],
        correct_answers: [true, false, false],
        user_answers: [false, false, false]
      },
      {
        name: '1 + 2 * 2 ?',
        answers: ['4', '5', 'Oh non pas des maths'],
        correct_answers: [false, true, false],
        user_answers: [false, false, false]
      }
    ]
  }),
  // ajout de mon component dans la liste 14/10/2019
  components: {
    Question
  },
  methods: {
    // fonction qui permet de passer à la question suivante en incrémentant l'index 15/10/2019
    nextQuestion: function () {
      var length = Object.keys(this.JPQuestions).length
      if (this.index < length - 1) {
        this.index++
      } else {
        alert('Fin du questionnaire')
      }
    },
    // fonction récupère les réponses saisies par l'utilisateur 15/10/2019
    saveUserResponse: function (JPresponseUser) {
      console.log('Data renvoyée')
      if (JPresponseUser != null) {
        console.log(JPresponseUser)
        this.nextQuestion()
      }
    }
  }
}
</script>
