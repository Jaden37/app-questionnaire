<template>
  <div class="question">
    <md-card>
      <md-card-header>
        Catégorie: {{JPquestion.category}}
        <!-- on récupère le titre passé dans l'objet 15/10/2019 -->
        <div class="md-title">{{JPquestion.name}}
        </div>
      </md-card-header>

      <md-card-content>
        <md-list>
          <!-- boucle sur les différentes réponses possibles 15/10/2019 -->
          <md-list-item v-for="(answer, index) in JPquestion.answers" v-bind:key="answer">
            <md-checkbox v-model="JPquestion.user_answers[index]">{{answer}}</md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>
      <md-card-actions>
        <!-- Lors du click sur le bouton emit 15/10/2019 -->
        <md-button class="md-raised md-primary" v-on:click="$emit('responseToQuestionnaire', JPquestion.user_answers)">Question suivante</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  // Toutes les cases sont par défaut décochées 14/10/2019
  // Tranferts de la valeur des cases dans l'objet 15/10/2019
  data: () => ({}),
  // Properties qui seront données en paramètre lors de l'utilisation du component 14/10/2019
  // Transformations des propriétes en un objet unique 15/10/2019
  props: {
    JPquestion: Object
  }
}
</script>
