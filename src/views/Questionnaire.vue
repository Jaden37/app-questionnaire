<template>
  <!-- Création de mon question avec mes layout 14/10/2019-->
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item "></div>
      <!-- Utilisation  des mes components passage en paramètres des questions et réponses 14/10/2019-->
      <div class="md-layout-item md-size-40">
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
import json from '../json/questions.json'
export default {
  name: 'questionnaire',
  data: () => ({
    JPpointsTotal: 0,
    index: 0,
    // Création de la liste des questions 15/10/2019
    JPQuestions: json
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
        console.log('Vous avez ' + this.JPpointsTotal + ' point(s)')
        // Redirige vers la page de résultat à la fin du questionnaire 05/11/2019
        this.$router.push({ name: 'result', query: { JPTotal: this.JPpointsTotal, JPnbrquestion: length } })
      }
    },
    // fonction récupère les réponses saisies par l'utilisateur 15/10/2019
    saveUserResponse: function (JPresponseUser) {
      console.log('Data renvoyée')
      if (JPresponseUser != null) {
        console.log(JPresponseUser)
        // Check si la réponse de l'utilisateur est correcte 05/11/2019
        if (JSON.stringify(JPresponseUser) === JSON.stringify(this.JPQuestions[this.index].correct_answers)) {
          console.log('Correct')
          // Incrémente le nombre de point total 05/11/2019
          this.JPpointsTotal++
        } else {
          console.log('False')
        }
        this.nextQuestion()
      }
    },
    // fonction qui mélange de manière aléatoire la liste des questions 12/11/2018
    shuffleArray: function (array) {
      var counter = array.length; var temp; var index
      while (counter > 0) {
        index = Math.floor(Math.random() * counter)

        counter--

        temp = array[ counter ]
        array[ counter ] = array[ index ]
        array[ index ] = temp
      }
      return array
    }
  },
  beforeMount () {
    // mélange le tableau des questions avant son affichage 12/11/2019
    this.shuffleArray(this.JPQuestions)
  }
}
</script>
