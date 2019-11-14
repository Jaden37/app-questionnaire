<template>
  <div class="home">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Votre Résultat</div>
          </md-card-header>
          <!-- affichage du résultat de l'utilisateur 05/11/2019 -->
          <md-card-content>
            {{JPTotal}} / {{JPnbrquestion}}
            <br>
            <!-- affiche une image en fonction du score par rapport au nombre de questions 05/11/2019 -->
            <div v-if="JPTotal > JPnbrquestion/2">
                <img src="img/trophy.png" height="50" width="50">
            </div>
            <div v-else>
                <img src="img/fail.png" height="50" width="50">
            </div>
            <br>
            <!-- affiche toutes les questions qu'a répondu l'utilisateur 14/11/2019 -->
            <md-card v-for="(question, index) in JPquestionRepondue" v-bind:key="question.name" v-bind:class="equalsArray(index)">
              <md-card-header>
                <div class="md-title">Question N° {{index+1}} :</div>
              </md-card-header>
              <md-card-content>
                {{question.name}}
                <div class="md-layout">
                  <div class="md-layout-item">
                    <md-list>
                      Vos réponses
                      <!-- boucle sur les différentes choisies par l'utilisateur 14/11/2019 -->
                      <md-list-item v-for="(answer, index) in question.answers" v-bind:key="answer">
                        <md-checkbox v-model="question.user_answers[index]">{{answer}}</md-checkbox>
                      </md-list-item>
                    </md-list>
                  </div>
                  <div class="md-layout-item">
                    <md-list>
                      Réponses attendues
                      <!-- boucle sur les réponses correcte de la question 14/11/2019 -->
                      <md-list-item v-for="(answer, index) in question.answers" v-bind:key="answer">
                        <md-checkbox v-model="question.correct_answers[index]">{{answer}}</md-checkbox>
                      </md-list-item>
                    </md-list>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </md-card-content>

          <md-card-actions>
            <!-- bouton de redirection vers la page home 05/11/2019 -->
            <router-link to="/"><md-button class="md-raised md-primary">Fin</md-button></router-link>
          </md-card-actions>
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'result',
  data: () => ({
    JPTotal: Number,
    JPnbrquestion: Number,
    JPdetailResponse: Array,
    JPquestionRepondue: []
  }),
  mounted () {
    this.JPTotal = this.$route.query.JPTotal
    this.JPnbrquestion = this.$route.query.JPnbrquestion
    this.JPquestionRepondue = this.$route.query.JPquestionRepondue
    console.log(this.JPquestionRepondue)
  },
  created () {
    this.editScorePerson()
  },
  methods: {
    editScorePerson: function () {
      // récupère l'id du user qui est mis dans un cookie 12/11/2019
      var JPpersonId = this.$cookies.get('id_user')
      JPpersonId = '' + JPpersonId + ''
      var that = this
      this.$JPdb.get(JPpersonId).then(function (doc) {
        // on set sont score et la date de sa dernière participation 12/11/2019
        doc.JPlastHighScore = that.JPTotal
        doc.JPlastPlayed = new Date()
        // on est obligé de pout dans le get sinon il affiche une erreur "update conflict" due à _rev qui est identique 12/11/2019
        // en faisant le put durant le get il modifie le _rev en le modifiant pour pouvoir éditer le doc 12/11/2019
        that.$JPdb.put(doc, function callback (err, result) {
          if (!err) {
            console.log('Successfully modified a person')
            console.log(result)
          } else {
            console.log(err)
          }
        })
      }).catch(function (err) {
        console.log(err)
      })
    },
    // retourne la class css en fonction du résultat de la question (correcte ou non) 14/11/2019
    equalsArray: function (index) {
      if (JSON.stringify(this.JPquestionRepondue[index].user_answers) === JSON.stringify(this.JPquestionRepondue[index].correct_answers)) {
        console.log('true')
        return 'md-correct'
      } else {
        console.log('false')
        return 'md-accent'
      }
    }
  }
}

</script>

<style>
.md-card.md-theme-default.md-correct{
  background-color: #42b883;
}
</style>
